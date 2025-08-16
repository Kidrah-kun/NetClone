import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt=""/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest & Popular</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        
      </div>
    </div>
  )
}

export default Navbar
