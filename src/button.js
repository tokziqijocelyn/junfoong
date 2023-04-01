import React from 'react'
import './App.css';

const Move = () => {

  const buttonStyles = {
    backgroundColor: '#00FFFF',
    color: 'black',
    padding: '10px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    fontSize: 50
  };

  const handleClick = () => {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  return (<button style={buttonStyles}>Click here to find out</button>)
}

export default Move