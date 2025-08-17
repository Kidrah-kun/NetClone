import React,{useState} from 'react' 
  
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'


function Login() {
// State to manage the sign in/sign up state
const [signState,setsignState] = useState('Sign In');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const user_auth = async (event)=>{
  event.preventDefault();
  if(signState === 'Sign In')
    await login(email, password);
  else
    await signup(name, email, password);
}

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {/* Toggle between Sign In and Sign Up */}
          {signState === 'Sign Up' ?  
          <input value={name} onChange={(e)=>setName(e.target.value)}
          type="text" placeholder='Your Name'/>:<></>}

          <input value={email} onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder='Email Address'/>

          <input value={password} onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder='Password'/>

          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {/* Toggle between Sign In and Sign Up */}
          {signState === 'Sign In' ?
          <p>New to Netflix? <span onClick={()=>setsignState('Sign Up')}>Sign Up now</span></p> :
          <p>Already have an account? <span onClick={()=>
            setsignState('Sign In')}>Sign In now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
