import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import './Login.css';
function Login() {
  
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [error,seterror]=useState(false);
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const authenticate=(e)=>
    {
      e.preventDefault();
    if(username.length==0 && password.length==0)
    {
      alert("Enter username and password")
    }
    
    else if(username && password)
    {
        dispatch(login(username));
        navigate("/");

    }
   
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
      <form >
      <input type="text" value={username} placeholder="jkr@2805" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>

      <input type="Passwordx400" value={password} placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <Link to ="/"><button type="submit" class="but2x" onClick={authenticate}>LOGIN</button></Link>
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
