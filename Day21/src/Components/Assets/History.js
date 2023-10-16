import React, { useEffect, useState } from 'react' 
import {Link, useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import './History.css'

const History=()=> { 
const [weatherlists, setweatherlists] = useState([]) 
const username=localStorage.getItem('username');
const {id} =useParams();
const navigate=useNavigate();
useEffect(() => 
{ 
getAllWeatherlist(); 
}, []) 



const getAllWeatherlist = () => {
   fetch(`http://localhost:8080/auth/history?username=${username}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
       if (data && Array.isArray(data)) {
         setweatherlists(data);
       } else {
         console.error("Invalid or empty JSON data received.");
       }
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 };
 
 


return ( 
  <div className="bodyoo">
   <div className="fulltable">
   <div className='rectangle78'>
   <p id='order'>Weather Details</p>
   
   </div>
      <br/>
      <br/>
     <table id='gettable'> 
     <thead>
     <tr> 
        <th>City</th> 
        <th>Humidity</th> 
        <th>Temperature</th> 
        <th>Wind</th> 
       
    </tr> 
    </thead>
   <tbody>
       {weatherlists.map((weatherlist)=>(
          <tr key={weatherlist.id}> 
       <td> {weatherlist.city}</td> 
       <td> {weatherlist.humidity}</td> 
       <td> {weatherlist.temp}</td> 
       <td> {weatherlist.wind}</td> 
       
      
    </tr> 
       ))}
       </tbody>
   </table> 
   <Sidebar/>
</div> 
</div>
)
} 
export default History;
