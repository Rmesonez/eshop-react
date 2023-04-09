import './CheckoutForm.css'
import Card from '../components/Card';
import CheckoutSummary from './CheckoutSummary';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
  return (
    
    <div className='checkout'>
        <h2>Checkout</h2>
        <form 
        // onSubmit={handleSubmit}
        >
          <div className='div'>
            <Card cardClass='card'>
              <CheckoutSummary />
            </Card>
          {/* </div>
          <div> */}
            <Card cardClass='card pay'>
              <h3>Stripe Checkout</h3>
              {/* <PaymentElement id="payment-element" /> */}
              <input type="text" />
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="card-details">
                {/* <CardElement id="card-element" /> */}

              </div>
              <button
                // disabled={isLoading || !stripe || !elements}
                id="submit"
                className='button'
              >
                <span id="button-text">
                  {/* {isLoading ? (
                    <img
                      src={spinnerImg}
                      alt="Loading..."
                      style={{ width: "20px" }}
                    />
                  ) : ( */}
                    "Pay now"
                  {/* )} */}
                </span>
              </button>
              {/* Show any error or success messages */}
              {/* {message &&  */}
              <div id="payment-message">
                {/* {message} */} message
              </div>
              {/* } */}
            </Card>
          </div>
        </form>
        </div>
    
  )
}

export default CheckoutForm
