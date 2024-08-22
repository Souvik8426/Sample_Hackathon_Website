import React from 'react';
import './ButtonComponent.css';

const GradientButton = ({ text, onClick }) => {
  return (
    <button className="gradient-button" onClick={onClick}>
      {text}
      <div className="hover-effect">
        <div></div>
      </div>
    </button>
  );
};

export default GradientButton;