import React, {useState} from 'react'
import './Register.css';
function Register() {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[location,setLocation]=useState("");
    const formHolder=(event)=>
  {
    const list={firstname,lastname,email,password,location};
  }
    
  return (
    <div className='rect1'>
    <div className='img1'>
        <img src="https://media.istockphoto.com/id/1464916734/photo/weather-forecast-symbol-data-presentation-with-graph-and-chart-on-dramatic-tropical-storm.jpg?s=612x612&w=0&k=20&c=fkIcW07AXklRojOvkq0VLAPE9ejFqZXUFvukDEhhTHE="height="591px" width="1280px"/>
        <div className='rect2'>
      <div className='h1'>
      <p>REGISTRATION</p>
      </div>
      <div className='form1'>
      <form onSubmit={formHolder}>
      <input type="text100" value={firstname} placeholder="Enter Firstname" onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>

      <input type="text300" value={lastname} placeholder="Enter Lastname" onChange={(e)=>setLastname(e.target.value)}/><br/><br/>

      <input type="text400" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
     
      <input type="password100" value={password} placeholder="Enter Passsword" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <input type="text500" value={location} placeholder="Enter Location" onChange={(e)=>setLocation(e.target.value)}/><br/><br/>
      <button type="submit" class="but2">REGISTER</button>

      </form>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Register
