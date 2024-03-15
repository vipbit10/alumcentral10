import React, { useState, useEffect } from 'react';
import './Container.css'
import logo from './logo.png'
import { Typewriter } from 'react-simple-typewriter';

const Container = () => {
   
return (
  <div className="image-section">
  <div className='jjj'>
    
   <img src="https://openthemagazine.com/wp-content/uploads/2023/07/BITS.jpg"/>
   </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div>
<div className='hannu'>
   <div className="center-image">
        <img src={logo} alt="Square Image"  className="square-image" />
     </div>
     
   <div className="overlay">
        <h2 className="welcome-heading">  <b>----WELCOME----</b></h2>
        <p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay:40,
            strings: [ "Discover the power of alumni connections." , ],
          }}
        />
        </p>
        
        <i className="fa fa-arrow-circle-down"></i>
      </div>

      </div>
      
    
 </div>
 </div>
  )
}

export default Container