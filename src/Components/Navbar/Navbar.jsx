import React from 'react'
import './Navbar.css'
import collegeIcon from './BIT.png'

function Navbar() {
  return (
    <nav className="navbar">
       <div className="brand">
        <img src={collegeIcon} alt="College Icon" className="college-icon" />
    <h1><b>BIRLA INSTITUTE OF TECHNOLOGY MESRA</b></h1>
    
   </div>

    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Login</a>
      <a href="#">Register</a>
      
    </div>
  
</nav>
);
}

export default Navbar;