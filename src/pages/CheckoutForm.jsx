import './CheckoutForm.css'
import Card from '../components/Card';
import CheckoutSummary from './CheckoutSummary';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const CheckoutForm = () => {

  const submit = () => {
    toast.success('Payment Successful', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
    navigate('/purchases');
    }, 5000);
  }

  const navigate = useNavigate();

  return (
    
    <div className='checkout'>
        <h2>Checkout</h2>
        <form 
        onSubmit={submit}
        className='div-form'
        >
          <div>
            <Card cardClass='card'>
              <CheckoutSummary />
            </Card>
          </div>
          <div className='pay'>
            <Card cardClass='card pay'>
              <h3>Stripe Checkout</h3>
              {/* <PaymentElement id="payment-element" /> */}
              <input type="text" className='input'/>
              <select className='select'>
                <option value="1">Visa</option>
                <option value="2">Master Card</option>
                <option value="3">American Express</option>
              </select>
              <div className="card-details">
                {/* <CardElement id="card-element" /> */}

              </div>
              <button id="submit"
                className='button'
              >
                <span id="button-text">
                    "Pay now"
                </span>
              </button>
              {/* <div id="payment-message">message
              </div> */}

            </Card>
            </div>
          
      </form>

    </div>
    
  )
}

export default CheckoutForm
