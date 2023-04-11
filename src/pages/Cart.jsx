import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { getCartItemsThunk } from '../store/slices/cart.slice';

const Cart = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItemsThunk());
  }, []);

  return (
    <div>
      <div className='table'>
        <h2>Shopping Cart</h2>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
            
         <div className="container-table">       

                  <h5 className="title title-1">s/n</h5>
                    <p className="info-sn">+1</p>
                  <h5 className="title title-2">Product</h5>
                    <div className='info-image'>
                    <img
                          // src={imageURL}
                          // alt={name}
                          // style={{ widh5: "100px" }}
                    />
                    <p>
                      <b> name </b>
                    </p>
                    </div>
                  <h5 className="title title-3">Price</h5>
                    <p className="info-price">price</p>
                    <h5 className="title title-4">Quantity</h5>
                    <div className='count'>
                      <button
                      className="btn-minus">
                        -
                      </button>
                          <p className="qty">
                            <b>quantity</b>
                          </p>
                          <button
                            className="btn-plus"
                          >
                            +
                          </button>
                      </div>
                      <h5 className="title title-5">Total</h5>
                      <p className="info-total">price s/dec</p>
                      <h5 className="title title-6">Action</h5>
                      <div className='icons'>
                        <FaTrashAlt
                          size={19}
                          color="red"
                        />
                      </div>
                    </div>

                  
                  

            <div className='summary'>
              <button 
              className="clear-cart" 
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
                    <b> $ quantity</b>
                  </p>
                  <div className='text'>
                    <h4>Subtotal:</h4>
                    <h3>Total</h3>
                  </div>
                  <p>Tax an shipping calculated at checkout</p>
                  <button
                    className="--btn --btn-primary "
                    onClick={() => navigate("/checkout")}
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
