import './LogRegRes.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import loginImg from '../assets/login.png'
import Loader from '../components/Loader'
import Card from '../components/Card'

const Login = () => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleSubmit, reset } = useForm();
  const navigate = useNavigate()


  const loginUser = () => {
    const localEmail = localStorage.getItem('email')
    const localPassword = localStorage.getItem('password')
    if(email === localEmail && password === localPassword){
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
      toast.success('Login Successful')
      setTimeout(() => {
        resetForm()
        navigate('/')
        window.location.reload()
      }, 2000)
    }else if(email === '' || password === '' ){
      toast.error('Please fill in all fields')
    }else if(email !== localEmail && password === localPassword){
      toast.error('Login Failed the email is incorrect')
    }else if(email === localEmail && password !== localPassword){
      toast.error('Login Failed the password is incorrect')
    }else if(!localEmail && !password){
      toast.error('Login Failed do you have an account?')
    }else {
      toast.error('Login Failed do you have an account?')
    }
 }

 const resetForm = () => {
  reset()
  setEmail('')
  setPassword('')
}

  return (
    <>
    {loading && <Loader />}
    <ToastContainer />
    <div className='auth sec-container'>
      <div className="img">
        <img src={loginImg} alt="login image" width={600} height={650}/>
      </div>
      <Card>
      <div className="form">
        <h2>LOGIN</h2>
        <div className="test">
        <div>
          <h3>Test Account</h3>
          <p>john@gmail.com</p>
          <p>john1234</p>
        </div>
        <div>
          <h3>Create Account</h3>
          {/* <p>Admin</p>
          <p>admin</p> */}
        </div>
        </div>
        <form onSubmit={handleSubmit(loginUser)}>
          <input type="email" placeholder='Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
          required/>
          <input type="password" placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>
          <button 
          className='btn'
          type='submit'>Login</button>
          <div className="reset-links">
            <Link to='/reset'>
              Forgot your Password?
            </Link>
          </div>
        </form>
          <span className='register'>
            <p>Don't have an account?</p>
            <Link to='/register'>Register</Link>
          </span>
      </div>
      </Card>
    </div>
    </>
  )
}

export default Login
