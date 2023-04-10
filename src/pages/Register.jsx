import './LogRegRes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addUserThunk } from '../store/slices/users.slice'
import { useForm } from 'react-hook-form'
import Card from '../components/Card'

const Register = () => {

  // const dispatch = useDispatch()
  const { handleSubmit, reset } = useForm();
  const navigate = useNavigate()

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const registerUser = () =>{
    // parameter data
    // console.log(data)
    // dispatch(addUserThunk(data))
    const localEmail = localStorage.getItem('email')
    const localUsername = localStorage.getItem('username')

    if(password !== confirmPassword){
      toast.error('Passwords do not match')
    }else if(email === localEmail){
      toast.error('Email already exists')
    }else if(username === localUsername){
      toast.error('Username already exists')
    }else {
    setLoading(true)
    console.log(username, email, password, confirmPassword)

    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
    toast.success('Registration Successful...')
    
    setTimeout(() => {
      resetForm()
      navigate('/login')
    }, 2000)
    }
  }


  const resetForm = () => {
    reset()
    setUserName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }



  return (
  <>
  <ToastContainer />
  {loading && <Loader />}
  <div className='auth sec-container'>
    <Card>
    <div className="form">
      <h2>REGISTER</h2>
      <form onSubmit={ handleSubmit(registerUser) }>
        <input type="text" placeholder='Username' required 
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
        <input type="email" placeholder='Email' required 
        value={email}
        onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
        />
        <input type="password" placeholder='Password' required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder='Confirm Password' required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
