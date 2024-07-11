import React from 'react'
import Logo from "../../assets/logo.png";
import Loader from '../loader';

function LoadingPage() {
  return (
    <div className='mainLoading'>
        <img src={Logo}  alt='Logo'/>
        <h1>An!ee Hub</h1>
        <Loader/>
    </div>
  )
}

export default LoadingPage