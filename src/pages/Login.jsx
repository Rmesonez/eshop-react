import './LogRegRes.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../components/Loader'
import Card from '../components/Card'
import axios from 'axios';

const Login = () => {

  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate()


  const submit = (data) => {
    setLoading(true)
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
    .then((res) => {
      // console.log(res.data)
      localStorage.setItem('token', res?.data?.token)
      toast.success('Login Successful')
      setTimeout(() => {
        resetForm()
        navigate('/')
        window.location.reload()
      }, 2000)
    })
    .catch((error) => {
      if(error.response?.status === 401){
        toast.error('User or Password Incorrect')
        resetForm()
      }else if(error.response?.status === 400){
        toast.error('User or Password Incorrect')
        resetForm()
      }else if(error.response?.status === 403){
        toast.error('User or Password Incorrect')
        resetForm()
      }else{
      console.log(error)
      }
    })
    .finally (() => {
      setLoading(false)
    })
  }

 const resetForm = () => {
  reset()
}

  return (
    <>
    {loading && <Loader />}
    <ToastContainer />
    <div className='auth sec-container'>
      <div className="img">
        <img src='/login.png' alt="login image" width={600} height={650}/>
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
          <h3>Create an Account</h3>
        </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="email" placeholder='Email' 
          {...register("email")}
          required/>
          <input type="password" placeholder='Password' 
          {...register("password")}
          required/>
          <button 
          className='btn'
          type='submit'>Login</button>
          {/* <div className="reset-links">
            <Link to='/reset'>
              Forgot your Password?
            </Link>
          </div> */}
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
