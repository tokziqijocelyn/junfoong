import React from 'react'
import Confetti from 'react-confetti'
import { useRef } from 'react';

const ConfettiEffect = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (

    <Confetti
      width={windowSize.current[0]}
      height={windowSize.current[1]}
    />
  )
}

export default ConfettiEffect