import './Footer.css'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='footer'>
      &copy;{year} All Rights Reserved
    </footer>
  )
}

export default Footer
