import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="ghc">GHc</option>
            </select>
            <button>Sign up <img src={arrow_icon} alt="" /></button>
        <div className="nav-right"></div>
        
    </div>
  )
}

export default Navbar