import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getCartItemsThunk, deleteCartItemThunk, updateCartItemThunk, cartCheckoutThunk } from '../store/slices/cart.slice';

const Cart = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItemsThunk());
  }, []);

  const cartItems = useSelector((state) => state.cart);

  const updateCart = (id, quantity) => {
    const data = {
      quantity: quantity
    }
    dispatch(updateCartItemThunk( id, data));
  }

  const clearCart = () => {
    cartItems.forEach((item) => {
      dispatch(deleteCartItemThunk(item.id));
    });
  }

  return (
    <div>
      <div className='table'>
        <h2>Shopping Cart</h2>
              <Link to="/#products">&larr; Continue shopping</Link>
        </div>
                
            {
              cartItems.map((item) => (
                  <div key={item.id}  className="container-table">
                    <h5 className="title title-1">
                      <b>#</b>
                    </h5>
                    <p className="info-sn">
                      <b>{item.id}</b>
                    </p>
                    <h5 className="title title-2">
                      <b>Product</b>
                    </h5>
                    <div className='info-image'>
                      <img
                        src={item?.product?.images[0]?.url}
                        alt={item?.product?.title}
                        style={{ width: "100px" }}
                      />
                      <p>
                        <b>{item?.product?.title}</b>
                      </p>
                      </div>
                    <h5 className="title title-3">
                      <b>Price</b>
                    </h5>
                    <p className="info-price">
                      <b>{item?.product?.price}</b>
                    </p>
                    <h5 className="title title-4">
                      <b>Quantity</b>
                    </h5>
                    <div className='count'>
                      <button
                        className="btn-minus"
                        onClick={ () => updateCart(item.id, item.quantity + 1) }
                        >+</button>
                        <span> { item.quantity } </span>
                        <button
                        onClick={ () => item.quantity > 1 ? updateCart(item.id, item.quantity - 1) : item.quantity
                        }
                        >-</button>
                        </div>
                        <h5 className="title title-5">
                          <b>Total</b>
                        </h5>
                        <p className="info-total">
                          <b>{item?.product?.price * item.quantity}</b>
                        </p>
                        <h5 className="title title-6">
                          <b>Actions</b>
                        </h5>
                        <button
                        className="btn-delete"
                        onClick={() => dispatch(deleteCartItemThunk(item.id))}
                        >
                          <FaTrashAlt />
                        </button>
                  </div>
              ))
            }
              
            <div className='summary'>
              <button 
              className="clear-cart" 
              onClick={() => clearCart()}
              >
                Clear Cart
              </button>
              <div className='checkout'>
                <div>
                  <Link to="/#products">&larr; Continue shopping</Link>
                </div>
                <br />

                <Card cardClass='card'>
                        <p>
                          <b>Products: { cartItems.length }</b>
                        </p>
                        <div className="text">
                          <h4>Total Mount:</h4>
                          <h3>${ 
                              cartItems.reduce((acc, item) => {
                                return acc + item.product.price * item.quantity
                              }, 0).toFixed(2)
                            }</h3>
                        </div>
                  <button
                    className="--btn --btn-primary "
                    onClick={() => {navigate("/checkout"), dispatch(cartCheckoutThunk())}}
                  >
                    Checkout
                  </button>
                </Card>
              </div>
            </div>
    </div>
  )
}

export default Cart
