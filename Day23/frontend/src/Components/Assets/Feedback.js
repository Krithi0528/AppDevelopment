import React,{ useState} from "react";
import "./Feedback.css"; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Sidebar from "./Sidebar";
function Feedback() {
  const[name,setName]=useState('');
  const[weather,setWeather]=useState('');
  const[forecast,setForecast]=useState('');
  const[communication,setCommunication]=useState('');

  const details={name,weather,forecast,communication};
  const navigate=useNavigate();

  const formHolder=async(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/auth/postfeedback",details)
    navigate("/footer");
  }
  return (
    <div>
 
       <div class="bgimg">
      
       <img src="https://img.goodfon.com/wallpaper/nbig/7/f9/kholmy-igra-art-gory-firewatch-campo-santo-les-peizazh-poz-7.jpg"  height="800px" width="1265px"></img>
       </div>
       <div class="rectangle666"></div>
       <div class="head666">
       <p>FEED BACK</p>
       </div>
      
       <div class="form666">
        <form onSubmit={formHolder}>
              <lable for="name">1.Name? </lable>
              <br/>
              <br/>
              <input type="text6666" value={name} onChange={(e)=>setName(e.target.value)}/>
              <br/>
              <br/>
              <label for="sas">2.Are there any challenges or issues you've encountered while using our app??</label>
              <br/>
              <input type="text6666" value={weather} onChange={(e)=>setWeather(e.target.value)}/>
              <br/>
              <br/>
              <lable for="better">3.Are there any specific features or information you think our app is missing that would improve your experience?</lable>
              <br/>
              <br/>
              <input type="text6666" value={forecast} onChange={(e)=>setForecast(e.target.value)}/>
              <br/>
              <br/>
              <label for="rate">4.How would you describe your overall experience with our app?</label>
              <br/>
              <input type="text6666" value={communication} onChange={(e)=>setCommunication(e.target.value)}/>
              <br/>
              <br/>
              <div class="but666">
              <button class="ZZZ666" type="submit">SUBMIT</button>
              </div>
              </form>
              
       </div>
       <Sidebar/>
    </div>
   
 );

}

export default Feedback;