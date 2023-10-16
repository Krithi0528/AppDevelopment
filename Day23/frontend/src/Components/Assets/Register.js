import React, {useState} from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
function Register() {
    
    const[username,setUsername]=useState("");
    const[emailid,setEmailid]=useState("");
    const[mobileno,setMobileno]=useState("");
    const[password,setPassword]=useState("");
    
    const [error,seterror]=useState(false);
    const navigate=useNavigate();
    const registerdetails={username,emailid,mobileno,password}
    const formHolder=(event)=>
    {
    if(username.length==0)
    {
      alert("Please fill the fields")
    }
    else if(emailid.length===0)
    {
      alert("Enter Emailid")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else if(mobileno.length===0)
    {
      alert("Enter location");
    }
    
    else
    {
      axios.post("http://localhost:8080/auth/register",registerdetails)
      navigate("/")
    }
  }
    
  return (
    <div className='rect1'>
    <div className='img1'>
        <img src="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w05315-small.jpg" height="591px" width="1280px"/>
        <div className='rect2'>
      <div className='h1'>
      <p>REGISTRATION</p>
      </div>
      <div className='form1'>
      <form onSubmit={formHolder}>
    

      <input type="text400" value={username} placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>

      <input type="email" value={emailid} placeholder="Enter Email" onChange={(e)=>setEmailid(e.target.value)}/><br/><br/>
     
      <input type="text500" value={mobileno} placeholder="Enter Mobileno" onChange={(e)=>setMobileno(e.target.value)}/><br/><br/>

      <input type="password" value={password} placeholder="Enter Passsword" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

     
      <button type="submit" class="but2">REGISTER</button>

      </form>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Register
