import './LogRegRes.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import resetImg from './assets/reset.png'
import Loader from '../components/Loader'
import Card from '../components/Card'

const Reset = () => {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const localEmail = localStorage.getItem('email')

  const resetPassword = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!email) {
      toast.error('Email is required')
      return
    }else if (!email.includes('@')) {
      toast.error('Email is invalid')
      return
    }else if(email !== localEmail){
      toast.error('Email is not registered')
    }else{
      console.log(email)
      toast.success('Check your email for password reset link')
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <>
    {loading && <Loader />}
    <div className='auth sec-container'>
      <div className="img">
      <img src={resetImg} alt="reset password" width={600} height={500}/>
    </div>
    <Card>
    <div className="form">
      <h2>RESET PASSWORD</h2>
      <form onSubmit={resetPassword}>
        <input type="email" placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />
        <button 
        className='btn'
        type='submit'>Reset Password</button>
        <div className="login-register-links">
          <p className='link-login'>
            <Link to='/login'>
              - Login
            </Link>
          </p>
          <p className='link-login'>
            <Link to='/register'>
              - Register
            </Link>
          </p>
        </div>
      </form>
    </div>
    </Card>
  </div>
  </>
  )
}

export default Reset
