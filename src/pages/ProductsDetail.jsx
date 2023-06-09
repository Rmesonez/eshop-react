import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import Loader from "../components/Loader"
import'./ProductsDetail.css'
import { addCartItemThunk } from "../store/slices/cart.slice"
import { toast, ToastContainer } from "react-toastify"

const ProductsDetail = () => {

  const [productDetail, setProductDetail] = useState({})
  const [quantity, setQuantity] = useState(1)

  const  { isLoading } = useSelector((state) => state.loading)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  
  
  const { id } = useParams()

  useEffect(() => {
    dispatch({ type: 'LOADING', payload: true })
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then((res) => {
      console.log(res?.data)
      setProductDetail(res?.data)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      dispatch({ type: 'LOADING', payload: false })
    })
  }, [])

  const addToCart = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error('You need to login to add products to cart')
      navigate('/login')
    }else{
    const data = {
      quantity: quantity,
      productId: productDetail.id
    }
    dispatch(addCartItemThunk(data))
  }
    
  }

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    isLoading ? <Loader /> :
    <div className='product-detail'>
      <ToastContainer />
      <img src={productDetail?.images?.[0]?.url} alt={productDetail?.name} />
      <div className="info-detail">
      <h1 className="info-title">{productDetail?.title}</h1>
      <p>{productDetail?.description}</p>
      <p>Price: <span> ${productDetail?.price}
      </span></p>
      <p>{productDetail?.stock}</p>
      <p>Category: <span>{productDetail?.category?.name}
      </span> 
      <div className="detail-quantity">
        <button
         onClick={
          () => {
            if (quantity > 1) {
              setQuantity(quantity - 1)
            }else {
              setQuantity(1)
            }
          }
        }
        >-</button>
        <span>{ quantity }</span>
        <button
        onClick={
          () => {
          setQuantity(quantity + 1)
          }
        }
        >+</button>
      </div>
      </p>
          <div className="product-info-btn">
              
              <button 
              onClick={handleGoBack}
              >
                Go Back
              </button>
              
              <button
              onClick={addToCart}
              >
                Add to Cart
              </button>
          </div>
      </div>
    </div>
  )
}

export default ProductsDetail
