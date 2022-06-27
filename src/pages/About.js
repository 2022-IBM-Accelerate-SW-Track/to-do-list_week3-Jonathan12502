import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/Jonathan Shah - IBM Accelerate Headshot.PNG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {profile_pic_name}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        
        <div className="name_title"><center>Jonathan Shah</center></div>
        <div className="brief_description">
          <center>Student studying computer science at Binghamton University</center>
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}