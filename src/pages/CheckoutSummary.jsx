import Card from "../components/Card";
import { Link } from "react-router-dom";
import './CheckoutSummary.css'
import { useSelector } from "react-redux";

const CheckoutSummary = () => {

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="checkout-summary">
      <h3>Checkout Summary</h3>
      <div>
        {cartItems.lenght === 0 ? (
          <>
            <p>No item in your cart.</p>
            <button className="btn">
              <Link to="/#products">Back To Shop</Link>
            </button>
          </>
        ): (
          <div>
            {
              cartItems.map((item) => (
              <div className="summary" key={item.id}>
                <h4>
                  <b>{item.product.title}</b>
                </h4> 
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <p>
                  <b>Price: {item.product.price}</b>
                </p>
              </div>
              ))} 
              <p>
                <b>
                  {`Cart item(s): ${ cartItems.length }`} 
                  </b>
              </p>
            <div className='text'>
              <h4>Total:</h4>
              <h3>
                {`${ cartItems.reduce((acc, item) => {
                  return acc + item.product.price * item.quantity
                }
                , 0).toFixed(2) }`}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}



export default CheckoutSummary
