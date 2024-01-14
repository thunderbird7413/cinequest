import React from "react";
import "./LandingPage.css";
import {Link} from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <div className="back_image"></div>
      <div className="overlay">
        <p className="heading1">Welcome to Cinequest</p>
        <p className="subTitle">The Beloved Movie Platform</p>
        <p className="para">
          Watch the latest movies, top rated movies, popular movies and much
          more...
        </p>
        <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", boxShadow: ""}}>
        <button className="continue_btn"><Link to="/home" style={{color: "white", textDecoration: "none"}}>Continue <i class="fa-solid fa-arrow-right"></i></Link></button>
        </div>
        
      </div>

      <div className="back_image1">
      <div className="overlay1">
        <p className="heading1">Suspense. Thrill. Action. Adventure</p>
        <p className="subTitle">Everything on Cinequest</p>
        <p className="para1">
          Just Login and Dive into the New World of Movies where imagination meets realtiy...
        </p>
      </div>
      </div>
      <div className="information">
        <div className="write">
        <p className="heading1">Watch everywhere</p>
        <p className="para2">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
        </div>
        <div className="image_section"></div>
      </div>
      <div className="footer">
        <h1>Cinequest</h1>
        <h2>© 1996-2024, Cinequest.com, Inc. or its affiliates</h2>
        </div>
      
    </>
  );
}
