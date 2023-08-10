import React from 'react'
import '../styles/Login.css'
import logo from '../logo.png';

const Login = () => {
  return (
    <div className="loginScreen">
      <img src={logo} className="login_logo"></img>
      <button className="login_button">Sign In</button>
    </div>
  )
}

export default Login
