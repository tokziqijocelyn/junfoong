import React from 'react'
import './App.css';

const Move = (props) => {

  const buttonStyles = {
    backgroundColor: '#00FFFF',
    color: 'black',
    padding: '50px',
    border: 'none',
    borderRadius: '500px',
    cursor: 'pointer',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    fontSize: 50
  };

  return (<button style={buttonStyles} onClick={props.handleClick}>Click here to find out</button>)
}

export default Move