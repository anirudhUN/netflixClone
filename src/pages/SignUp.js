import React,{useState} from 'react'
import '../styles/SignUp.css'
import logo from '../logo.png';

const SignUp = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     if (email ==='user@mail.com' && password === 'Password') {
      onSignIn()
    } else {
      alert('Authentication failed. Invalid email or password.');
    }}
  

  return (
    <div className="loginScreen">
      <img src={logo} className="login_logo" alt="netflix logo"></img>
    
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input placeholder="Email" type='Email' onChange={handleEmailChange}/>
        <input placeholder='Password' type="password" onChange={handlePasswordChange}/>
        <button type="Submit">Sign In</button>
        <h4><span className='signuptext'>New to Neflix? </span>Sign up now</h4>
      </form>
    </div>
    </div>
  )
}

export default SignUp
