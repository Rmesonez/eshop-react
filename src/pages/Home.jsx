import './Home.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StarsRating from "react-star-rate";
import { toast, ToastContainer } from "react-toastify";
import Card from '../components/Card'
import { getProductsThunk, filterCategoriesThunk, filterNameThunk } from '../store/slices/products.slice'
import { getCartItemsThunk, addCartItemThunk } from "../store/slices/cart.slice"
import Loader from '../components/Loader'
import Slider from '../components/Slider'



const Home = () => {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const { reset, handleSubmit } = useForm()
  const { isLoading } = useSelector((state) => state.loading)


  useEffect(() => {
    dispatch(getProductsThunk())

    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
    .then((res) => {
      setCategories(res?.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

 //obtener nombre del producto y su precio
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  useEffect(() => {
    const min = Math.round(Math.min(...products?.map((product) => product.price - 100 )))
    const max = Math.max(...products?.map((product) => product.price))

    setMinPrice(min)
    setMaxPrice(max)
  }, [products])

  //all products sorted by price

  const [price, setPrice] = useState(0)

 const [productsRangeFiltered, setProductsRangeFiltered] = useState([])

 useEffect(() => {
   const filter = products.filter((product) => product?.price <= price)
   const sorted = filter.sort((a, b) => a.price - b.price)
   setProductsRangeFiltered(sorted)
    
  }, [price, products])

  // console.log(products[0].images)
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState('');

  const submitReview = (e) => {
    e.preventDefault();
    console.log(rate);
    console.log(review);
    if (rate === 0) {
      toast.error("Please select a rating");
    }else {
      toast.success("Review Submitted");
      resetForm();
    }
  };

  const resetForm = () => {
    setReview('');
    reset();
  };

  //add to cart

  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartItemsThunk())
  }, [])


  const addToCart = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      toast.error('You must be logged in to add items to your cart')
      navigate('/login')
    }else{
      const data = {
        quantity: quantity,
        productId: products?.[0]?.id
      }
      dispatch(addCartItemThunk(data))
  }
  }

  return (
    <>
    {
      isLoading ? <Loader /> : null
   }
   <ToastContainer />
   <div className="home-container">
      <div className='filter-container'>
      <div className='rate-product'>
        <h2>{ 
          products?.[0]?.title
        }</h2>
        <img
              src={ products?.[0]?.images?.[1]?.url }
              alt={ products?.name }
            />
        <Card cardClass='card'>
              <form 
              id='rate-form'
              className='rate-form'
              onSubmit={(e) => handleSubmit(submitReview(e))}
              >
                <label>Rating:</label>
                <StarsRating
                  value={rate}
                  onChange={(rate) => {
                    setRate(rate);
                  }}
                />
                <label>Review</label>
                <textarea
                  value={review}
                  required
                  onChange={(e) => setReview(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit" className="">
                  Submit Review
                </button>
              </form>
            </Card>
        </div>
        <h1>Filter Products</h1>
        <div className='form-group'>
        <label htmlFor="search">Search by Name</label>
        <input type="text"
        placeholder='Product Name'
        value={ inputSearch }
        onChange={ (e) => setInputSearch(e.target.value) }
        />
        <button onClick={ () => dispatch(filterNameThunk(inputSearch)) }>Search</button>
        
        <label htmlFor="search">Search by Category</label>
        <select onChange={ (e) => dispatch(filterCategoriesThunk(e.target.value)) }>
          <option value=''>All</option>
          {
            categories.map((category) => (
              <option key={category?.id} value={category?.id}>{category?.name}</option>
            ))
          }
        </select>
        <label htmlFor="search">Search by Price</label>
        <span className='price'>${ minPrice } - ${ maxPrice }</span>
        <input type='range'
        step={ 1 }
        min={ minPrice }
        max={ maxPrice }
        value={ price }
        onChange={ (e) => setPrice(e.target.value) }
        />
        </div>
      </div>
      <div>
            <Slider />
      </div>
    <div id='products' className='products-container'>
      {
        price > minPrice ? (
          productsRangeFiltered.map((product) => (
            <div className='product-card' key={product?.id}>
                <img src={product?.images?.[0]?.url} alt={product.name} />
                <h2>{product?.title}</h2>
                <p>$ {product?.price}</p>
                <p>{product?.brand}</p>
                <div className="product-btn">
                <button>
                  <Link to={`/products/${product?.id}`}>
                Product Detail
                  </Link>
                </button>
                <button
                onClick={addToCart}
                >Add to Cart</button>
                </div>
            </div>
          ))
        ) : (
          products.map((product) => (
            <div className='product-card' key={product?.id}>
                <img src={product?.images?.[0]?.url} alt={product.name} />
                <h2>{product?.title}</h2>
                <p>$ {product?.price}</p>
                <p>{product?.brand}</p>
                <div className="product-btn">
                <button>
                  <Link to={`/products/${product?.id}`}>
                Product Detail
                  </Link>
                </button>
                <button
                onClick={ addToCart }
                >Add to Cart</button>
                </div>
            </div>
          ))
        )
      }
    </div>
    </div>
    </>
  )
}

export default Home
