import React, { useState } from "react";
import "./Home.css";
import ModalVideo from "react-modal-video";
// import 'react-modal-video/scss/modal-video.scss'
import "./Trailers.scss";
import { BiPlayCircle } from "react-icons/bi";
import Natalie from "./trailers/Natalie";

function Featured() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="featured-div">
        <div className="featured">
          <h3 className="title1">Featured Today</h3>
          <div className="lists-div">
            <div className="list">
              <img
                className="featured-img"
                src="https://i.postimg.cc/kX6WQrjp/maxresdefault.jpg"
                alt="maxresdefault"
                border="0"
              />
              <div className="ads-title">
                <ModalVideo
                  className="modal-video"
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="4aNj5VDbBrA"
                  onClose={() => setOpen(false)}
                />

                <button className="play-button1" onClick={() => setOpen(true)}>
                  <BiPlayCircle className="play-circle3" />
                </button>
                <p className="p-tag">
                  Leonardo DiCaprio roles through the years
                </p>
              </div>
            </div>

            <Natalie />
            {/* <div className='list2'>
                
                <img  className='featured-img' src="https://i.ibb.co/dj0GM9H/Screen-Shot-2018-11-30-at-12-58-42-PM.webp" alt="Screen-Shot-2018-11-30-at-12-58-42-PM" border="0"/>
                
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
