import React ,{useState} from 'react'
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Sidebar from './Sidebar';
export default function Contact()
  {
    const [firstname, setFirstName] = useState("");
      const [lastname, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [mobileno, setMobileNo] = useState("");
      const [message, setMessage] = useState("");
      const navigate=useNavigate();
      const details={firstname,lastname,email,mobileno,message}
      const formHolder =async(e) =>{
        e.preventDefault();    
    if(firstname.length===0 && lastname.length===0 && email.length===0)
    {
      alert("Enter username and emaild")
    }
    else
    {
      axios.post("http://localhost:8080/auth/addContact",details)
      navigate("/footer");
    }
    }
  return (
    <div>
    <Sidebar/>
    <div className='bodycon'>
    <div className='imagecon'>
        <img src="https://img.freepik.com/free-vector/flat-user-interface-concept-with-weather-widgets-web-elements-mobile-design_1284-45211.jpg?size=626&ext=jpg&ga=GA1.1.1411802109.1694714910&semt=ais" height="320px" width="320px"/>
    </div>
    <div className='rectcontact'>
    <div className='contactfull'>
       <form onSubmit={formHolder}>
           <h1>Contact Us</h1>
           <input type="text" id="firstName" placeholder="First Name" required value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
           <input type="text" id="lastName" placeholder="Last Name" required value={lastname} onChange={(e) => setLastName(e.target.value)}/>
           <input type="email" id="email" placeholder="Email"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
           <input type="text" id="mobile" placeholder="Mobile Number" required  value={mobileno} onChange={(e) => setMobileNo(e.target.value)}/>
           <h4>Type Your Message Here...</h4>
           <textarea type="text" name="" value={message} onChange={(e)=>setMessage(e.target.value)} required="required"/>
           <input type="submit" value="Send" id="contact_button"/>
       </form>
    </div>
   
    </div>
    </div>
    </div>
  )
}
