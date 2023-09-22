import React from 'react'
import Home from './Home';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
export default function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div className="body67">
    <Home/>
    <div className="para">
    {username}
    <p>Real-Time Weather Data</p>
    </div>
    <div className="Footer">
    <div className="container text-center">
    <div className="row">
    <div className="col-md-6 col-lg-5 col-12 ft-1">
       <h3><span>WEATHER</span>CAST</h3>
       <p><br/>A Change in the Weather <br/>is sufficient to recreate <br/>the world and ourselves!</p> 
       <div className="footer-icons">
       <i class="fab fa-facebook"></i>
       <i class="fab fa-twitter"></i>
       <i class="fab fa-square-instagram"></i>
       <i class="fab fa-linkedin-in"></i>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <ul>
      <li className="nav-item"> 
      <Link to="/">Home</Link>
      </li>
      <li className="nav-item"> 
      <Link to ="/login">Login</Link>
      </li>
      <li className="nav-item"> 
      <Link to="/reg">Register</Link>
      </li>
      <li className="nav-item"> 
      <Link to="/login">Log Out</Link>
      </li>
    </ul>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>Contact Info</h4>
     <p><i class="fa-solid fa-phone-volume"></i> +91 9121324083</p>
     <p><i class="fa-solid fa-envelope"></i>weatherforecast36@gmail.com</p>
     <p><i class="fa-sharp fa-solid fa-paper-plane"></i>Coimbatore, India.</p>
    </div>
    </div>
    </div>
    <div className="Last-footer">
    <p>Design By Weather Cast</p>
    </div>
    </div>
</div>
)
}