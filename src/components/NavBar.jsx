import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const logo = (
        <div className="logo">
            <Link to='/'>
                <h2>e<span>Shop</span>.</h2>
            </Link>
        </div>
    )

const activeLink = ({ isActive }) => isActive ? 'active' : ''


const NavBar = () => {

    const cartItems  = useSelector(state => state.cart)
    console.log(cartItems)



    const cart = (
        <span className="cart">
            <Link to='/cart'>
                <FaShoppingCart
                size={20}
                />
                <p className="cart-quantity">0</p>
            </Link>
        </span>
    )

    const [showMenu, setShowMenu] = useState(false)
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const hideMenu = () => {
        setShowMenu(false)
    }

    useEffect(() => {
        if(localStorage.getItem('username') !== null){
            setUserName(localStorage.getItem('username'))
        }else{
            setUserName(null)
        }
    }, [ userName ])


    const logOut = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('token')
        toast.success('Logout Successful')
        setTimeout(() => {
            navigate('/')
        }, 2000)
        if(localStorage.getItem('username') === null && localStorage.getItem('email') === null && localStorage.getItem('password') === null && localStorage.getItem('token') ===  null){
            console.log('logged out')
        }
        window.location.reload()
    }

  return (
    <>
    <ToastContainer />
    <header className='header-container'>
        <div className='header'>
            {logo}

        <nav className={
            showMenu ? 'show-nav' : 'hide-nav'
            }>
            <div className={
                showMenu ? 'nav-wrapper show-nav-wrapper' : 'nav-wrapper'
            }
            onClick={ hideMenu }
            ></div>

            <ul
            onClick={ hideMenu }
            >
                <li className='logo-mobile'>
                    {logo}
                    <FaTimes size={22} color='#fff'
                    onClick={ hideMenu }
                    />
                </li>
                <li>
                    {/* {()=> console.log(state)} */}
                    <NavLink to='/' className={ activeLink }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={ activeLink }>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <div className="header-right"
            onClick={ hideMenu }
            >
                <span className='links'>
                    <NavLink to='/login' 
                    className={
                        userName !== null ? 
                        'not-loged' : activeLink }>
                        Login
                    </NavLink>
                    <a href="#" className={
                        userName !== null ? 'loged' : 'not-loged'
                    }>
                        <FaUserCircle size={18} /> 
                        Hi, {userName}
                    </a>
                    <NavLink to='/register' className={ activeLink }>
                        Register
                    </NavLink>
                    <NavLink to='/purchases' className={ activeLink }>
                        Purchases
                    </NavLink>
                    <Link to='/' onClick={logOut}>
                        Log Out
                    </Link>
                </span>
                {cart}
            </div>
            

        </nav>
        <div className="menu-icon">
            {cart}
            <HiOutlineMenuAlt3 
            size={28}
            onClick={ toggleMenu }
            />
        </div>
        </div>
    </header>
    </>
  )
}

export default NavBar
