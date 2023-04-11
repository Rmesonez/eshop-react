import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import Loader from "../components/Loader"
import'./ProductsDetail.css'

const ProductsDetail = () => {

  const [productDetail, setProductDetail] = useState({})

  const  { isLoading } = useSelector((state) => state.loading)

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()




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


  const handleGoBack = () => {
    navigate('/')
  }

  return (
    isLoading ? <Loader /> :
    <div className='product-detail'>
      <img src={productDetail?.images?.[0]?.url} alt={productDetail?.name} />
      <div className="info-detail">
      <h1 className="info-title">{productDetail?.title}</h1>
      <p>{productDetail?.description}</p>
      <p>Price: <span> ${productDetail?.price}
      </span></p>
      <p>{productDetail?.stock}</p>
      <p>Category: <span>{productDetail?.category?.name}
      </span> 
      </p>
          <div className="product-info-btn">
              
              <button 
              onClick={handleGoBack}
              >
                Go Back
              </button>
              
              <button>
                Add to Cart
                </button>
          </div>
      </div>
    </div>
  )
}

export default ProductsDetail
