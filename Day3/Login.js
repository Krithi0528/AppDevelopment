import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Login.css';
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    
    const formHolder=(event)=>
  {
    const list={email,password};
    navigate("/main")
  }
  return (
    <div className='rect1x'>
    <div className='img1x'>
        <img src="https://media.tenor.com/yOVsJTBtOEYAAAAC/storm-lightning.gif"height="591px" width="1280px"/>
      <div className='rect2x'>
      <div className='h1x'>
      <p>Welcome To</p>
      <div className='p2x'>
        <p>WEATHER</p>
        <div className='p3x'>
        <p>BOOTH</p>
        </div>
      </div>
      </div>
      <div className='form1x'>
      <form onSubmit={formHolder}>
      <input type="email" value={email} placeholder="jkr@2805" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

      <input type="Passwordx400" value={password} placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <button type="submit" class="but2x">LOGIN</button>
      </form>
      </div>
      <div className='plx'>
      <p>Don't have an account?<Link style={{textDecoration:"none", color:"white"}}to="/reg"> Register here</Link></p>
      </div>

    <div className='img2x'>
        <img src="https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"height="400px" width="420px"/>
    <div className='rect3x'>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Login
