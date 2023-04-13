import './CheckoutForm.css'
import Card from '../components/Card';
import CheckoutSummary from './CheckoutSummary';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { cartCheckoutThunk } from '../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';


const CheckoutForm = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);


  const submit = () => {
    if (cardNumber.length !== 16) {
      toast.error('Invalid Card Number', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if (expiryDate.length !== 5) {
      toast.error('Invalid Expiration Date', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if (cvc.length !== 3) {
      toast.error('Invalid CVC', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else {
      toast.success('Payment Successful', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    checkout();
    setTimeout(() => {
    navigate('/purchases');
    }, 3000);
  }
  }

  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(cartCheckoutThunk(cartItems));
  }

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
              <input type="text" className='input' placeholder='Card Number'
              onChange={(e) => {
                setCardNumber(e.target.value);
              }
              }
              />
              <select className='select'>
                <option value="0">Select Card Type</option>
                <option value="1">Visa</option>
                <option value="2">Master Card</option>
                <option value="3">American Express</option>
              </select>
              <div className="card-details">
              <input type="text" 
              placeholder="MM/YY"
              className="input"
              onChange={(e) => {
                setExpiryDate(e.target.value);
              }
              }
              />
              <input type="text"
              placeholder="CVC"
              className="input" 
              onChange={(e) => {
                setCvc(e.target.value);
              }
              }
              />
              </div>
              <button id="submit" className='button' disabled={
                cardNumber.length !== 16 || expiryDate.length !== 5 || cvc.length !== 3 ? true : false
              }>
                <span id="button-text">
                    Pay now
                </span>
              </button>
            </Card>
            </div>
          
      </form>

    </div>
    
  )
}

export default CheckoutForm
