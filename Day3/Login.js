import React, {useState} from 'react'
import './Login.css';
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const formHolder=(event)=>
  {
    const list={email,password};
  }
  return (
    <div className='rect1'>
    <div className='img1'>
        <img src="https://media.tenor.com/yOVsJTBtOEYAAAAC/storm-lightning.gif"height="591px" width="1280px"/>
      <div className='rect2'>
      <div className='h1'>
      <p>Welcome To</p>
      <div className='p2'>
        <p>WEATHER</p>
        <div className='p3'>
        <p>BOOTH</p>
        </div>
      </div>
      </div>
      <div className='form1'>
      <form onSubmit={formHolder}>
      <input type="email" value={email} placeholder="jkr@2805" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

      <input type="Password400" value={password} placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <button type="submit" class="but2">LOGIN</button>
      </form>
      </div>
      <div className='pl'>
      <p>Don't have an account? Register here</p>
      </div>

    <div className='img2'>
        <img src="https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"height="400px" width="420px"/>
    <div className='rect3'>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Login
