import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import './Cart.css'

const Cart = () => {


  const navigate = useNavigate();

  return (
    <div>
      <div className='table'>
        <h2>Shopping Cart</h2>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
            
         <div className="container-table">       
                
                  <h5 className="title">s/n</h5>
                  <h5 className="title">Product</h5>
                  <h5 className="title">Price</h5>
                  <h5 className="title">Quantity</h5>
                  <h5 className="title">Total</h5>
                  <h5 className="title">Action</h5>
                

                
                    <p className="info-sn">+1</p>
                    <div className='info-image'>
                    <p>
                      <b> name </b>
                    </p>
                    <img
                          // src={imageURL}
                          // alt={name}
                          // style={{ widh5: "100px" }}
                    />
                    </div>
                    <p className="info-price">price</p>

                    <div className='count'>
                      <button
                      className="btn-minus">
                        -
                      </button>
                          <p>
                            <b>quantity</b>
                          </p>
                          <button
                            className="btn-plus"
                          >
                            +
                          </button>
                      </div>

                      <p className="info-total">price s/dec</p>
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
