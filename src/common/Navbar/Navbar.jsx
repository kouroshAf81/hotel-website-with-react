import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex-space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className='fas fa-bars'></i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}  onClick={handleClick}>
            <div className={`close-menu ${click && 'active'}`}><i className='fas fa-times'></i></div>
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
            <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
            <li><Link to='/destinations' onClick={closeMobileMenu}>Destination</Link></li>
            <li><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to='/testimonial' onClick={closeMobileMenu}>Testimonial</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <span>Sign in</span>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <span>Register</span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn request-btn'>Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex-space">
          <div className="logo">
            <img src='./hotel-website-with-react/images/logo.png' alt="" />
          </div>
          <div className="contact flex-space">
            <div className="box flex-space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to='/contact'>info@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

