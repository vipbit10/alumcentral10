import React from 'react';
import './GlowingButton.css';

const GlowingButton = ({ message }) => {
  return (
    <div className="glowing-button">
      <button>{message}</button>
    </div>
  );
};

export default GlowingButton;