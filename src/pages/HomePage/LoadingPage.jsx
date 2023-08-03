import React, { useEffect } from 'react'
import Logo from '../../components/Logo/Logo'
import "./loading-page.css"
import logo_frame from '../../assets/images/logo-frame.svg';

function LoadingPage() {

  return (
    <div className='loading-page'>
        <Logo scale="scale-1"/>
        <h1 className='workverse-name'>WORKVERSE</h1>
        {/* <img src={logo_frame} alt="logo fram" className='logo-frame' /> */}
    </div>
  )
}

export default LoadingPage