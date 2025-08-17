import React from 'react'   
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <button type='submit'>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>New to Netflix? <span>Sign Up now</span></p>
          <p>Already have an account? <span>Sign In now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
