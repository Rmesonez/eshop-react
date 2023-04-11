import Card from "../components/Card";
import { Link } from "react-router-dom";
import './CheckoutSummary.css'

const CheckoutSummary = () => {
  return (
    <div className="checkout-summary">
      <h3>Checkout Summary</h3>
      <div>
        {/* {cartItems.lenght === 0 ? (
          <> */}
            <p>No item in your cart.</p>
            <button className="btn">
              <Link to="/#products">Back To Shop</Link>
            </button>
          {/* </> */}
        {/* ) : ( */}
          <div>
            <p>
              <b>
                {/* {`Cart item(s): ${cartTotalQuantity}`} */}
                total quantity
                </b>
            </p>
            <div className='text'>
              <h4>Subtotal:</h4>
              <h3>
                {/* {cartTotalAmount.toFixed(2)} */}
                total amount
              </h3>
            </div>
            {/* {cartItems.map((item, index) => {
              const { id, name, price, cartQuantity } = item;
              return ( */}
                <Card 
                // key={id} 
                cardClass='card sumary'>
                  <h4>Product: name</h4>
                  <p>Quantity: cart quantity</p>
                  <p>Unit price: price</p>
                  <p>Set price: price * quantity</p>
                </Card>
              {/* );
            })} */}
          </div>
        {/* )} */}
      </div>
    </div>
  )
}

export default CheckoutSummary
