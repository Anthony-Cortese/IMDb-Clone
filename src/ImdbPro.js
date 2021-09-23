import React from "react";
import "./ImdbPro.css";
import "./SignIn.css";
import { SiImdb } from "react-icons/si";
import { AiFillAmazonSquare } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";

function ImdbPro() {
  return (
    <div className="pro-body">
      <div className="pro-title">
        <img
          className="pro-img"
          src="https://i.postimg.cc/vH8P3s8Q/IMDb-Pro-Primary-V532237639.jpg"
          alt="338-3388998-internetmoviedatabase-imdbpro-imdb-logo-websites-imdb-pro-logo"
          border="0"
        />
      </div>
      <div className="signin-pro">
        <div className="sign-buttons">
          <h5 className="header-pro">
            Get the essential resource for entertainment professionals
          </h5>
          <div className="imdb-button">
            <button className="buttons">
              <AiFillAmazonSquare className="amazon" />
              Join with Amazon
            </button>
          </div>
          <div className="account">Already have an account?</div>{" "}
          <div className="line4"></div>
          <div className="line5"></div>
          <div className="imdb-button">
            <button className="buttons">
              <AiFillAmazonSquare className="amazon" />
              Join with Amazon
            </button>
          </div>
          <div className="imdb-button">
            <button className="buttons">
              <SiImdb className="imdb-icon" />
              <span>Log in with IMDb</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-pro">
        <button className="create1">Open the app</button>
        <div className="pro-links1">
          <p className="pro-links">Harassment and Inequality Resources</p>
        </div>
        <div className="pro-links1">
          <p className="pro-links">Feedback</p>
        </div>
        <div className="pro-links1">
          <p className="pro-links">Help</p>
        </div>
        <div className="pro-links1">
          <p className="pro-links">Contact Us</p>
        </div>
        <div className="pro-links1">
          <p className="pro-links">View Desktop Version</p>
        </div>
        <div className="pro-images">
          <img
            className="pro-image"
            src="https://i.postimg.cc/K8r9M1cf/badge-example-preferred-2x.png"
            alt="222-2228504-app-store-badge-png-download-app-store-png"
            border="0"
          />
          <img
            className="pro-image"
            src="https://i.postimg.cc/52tKdxS2/1200px-Google-Play-Store-badge-EN-svg.png"
            alt="22-227363-people-need-not-worry-about-the-devices-they"
            border="0"
          />
        </div>
        <p className="pro-links2">Copyright © 1990-2021 IMDb.com, Inc.</p>
        <p className="pro-links2">An Amazon Company</p>

        <div className="pro-bottom">
          <p className="pro-links3">Subscriber</p>
          <p className="pro-links3">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default ImdbPro;
