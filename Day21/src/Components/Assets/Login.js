import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Login.css';
import { login } from '../../Redux/userSlice';
import { useDispatch } from "react-redux"
function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logindetails={username,password};
    const formHolder=async(e)=>
  {
    e.preventDefault();
    try
    {
    if(username.length==0 && username.length==0)
    {
      alert("Enter username and password")
    }
    else if(username.length===0)
    {
      alert("Enter Username")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else if(username && password) {
      dispatch(login(username));
      
      const response=await axios.post("http://localhost:8080/auth/authenticate",{username,password});
      localStorage.setItem("token", response.data.token)
      navigate("/footer");
    }
  }
  catch(error)
  {
    alert("Incorrect Username and Password.");
  }

  }
  return (
    <div className='rect1x'>
    <div className='img1x'>
        <img src="https://img.freepik.com/premium-vector/panoramic-view-mountain-landscape-fur-tree-with-gradient-mesh-vector-illustration_176503-748.jpg?w=1380"height="591px" width="1280px"/>
      <div className='rect2x'>
      <div className='h1x'>
      <p>Welcome To</p>
      <div className='p2x'>
        <b><p>ACCUWEATHER</p></b>
        </div>
        
      </div>
      <div className='form1x'>
      <form >
      <input type="username" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>

      <input type="Password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <button type="submit" class="but2x" onClick={formHolder}>LOGIN</button>
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
