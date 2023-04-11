import './LogRegRes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Card from '../components/Card'
import axios from 'axios';

const Register = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const submit= (data) => {
    setLoading(true)
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users', data)
    .then((res) => {
      console.log(res?.data)
      toast.success('Registration Successful')
      setTimeout(() => {
        resetForm()
        navigate('/login')
      }, 2000)
    })
    .catch((error) => {
      if(error.response?.status === 400){
        toast.error('Email already exists')
        resetForm()
      }else if(error.response?.status === 403){
        toast.error('User already exists')
        resetForm()
      }else{
      console.log(error)
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const resetForm = () => {
    reset()
  }

  return (
  <>
  <ToastContainer />
  {loading && <Loader />}
  <div className='auth sec-container'>
    <Card>
    <div className="form">
      <h2>REGISTER</h2>
      <form onSubmit={ handleSubmit(submit) }>
        <input type="text" placeholder='First Name' required 
        {...register('firstName')} 
        />
        <input type="text" placeholder='Last Name' required 
        {...register('lastName')}/>
        <input type="email" placeholder='Email' required 
        {...register('email')}/>
        <input type="password" placeholder='Password' required
        {...register('password')}/>
        <input type="number" placeholder='Phone Number' required
        {...register('phone')}/>
        <button 
        className='btn'
        type='submit'>Register</button>
      </form>
        <span className='register'>
          <p>Already have an account?</p>
          <Link to='/login'>Login</Link>
        </span>
    </div>
    </Card>
    <div className="img">
      <img src='/register.png' alt="register image" width={600} height={650}/>
    </div>
  </div>
</>
  )
}

export default Register
