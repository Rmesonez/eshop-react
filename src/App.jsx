import './App.css'
import './DarkMode.css'
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, createContext } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ReactSwitch from 'react-switch';
//components
import { Footer, NavBar, Loader, Protect } from './components/index'
//pages
import { Home, Contact, Login, Register, Purchases, ProductsDetail, Cart, CheckoutForm } from './pages/index'


export const ThemeContext = createContext(null);

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <HashRouter>
      <ToastContainer />
        {isLoading ? <Loader /> : null}
        <div className="App" id={ theme }>
        <div className="switch">
					<span className="switch-svg"> { theme === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
          className="sun">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="moon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>    
          }</span>
				<ReactSwitch 
				onChange={toogleTheme} checked={ theme === 'dark' } 
				/>
				</div>
          <NavBar />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/contact" element={ <Contact /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/products/:id" element={ <ProductsDetail /> } />
              <Route path="/cart" element={ <Cart /> } />

              <Route element={ <Protect /> }>
                <Route path="/purchases" element={ <Purchases /> } />
                <Route path="/checkout" element={ <CheckoutForm /> } />
              </Route>

            </Routes>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  )
}

export default App
