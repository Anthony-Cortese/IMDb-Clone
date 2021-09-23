import React, { useState } from "react";
// import {Link} from 'react-router-dom'
// import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiPlayCircle } from "react-icons/bi";
import { GoBookmark } from "react-icons/go";
import "./FrontPage.css";
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from "react-modal-video";
// import 'react-modal-video/scss/modal-video.scss'
import "./Trailers.scss";
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import Zodiac from "./trailers/Zodiac";
import BlackSwan from "./trailers/BlackSwan";

// const movies = [
//      {url: "https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"},
//      {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"},
// ]

// const posters = [
//     {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"}
// ]

function FrontPage() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="second-div">
      <div className="second-div2">
        <div className="background-img3">
          <div className="second-info">
            <div className="second-img">
              <GoBookmark className="watchlist-icon1" />
              <img
                className="inception-img"
                src="https://i.postimg.cc/vmc89BSC/inception-2010-french-original-film-art-256f6a57-c282-44ba-872b-fb1eedb5b32b-1200x.jpg"
                alt="inception"
                border="0"
              />
              {/* <a href='https://postimg.cc/BLdd2XW6' target='_blank'><img src=' border='0' alt='il-570x-N-1898560318-kwx1'/></a> */}

              {/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/ErkNDIj" data-context="false" ><a href="//imgur.com/a/ErkNDIj"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
            </div>
            <div className="second-front">
              <ModalVideo
                className="modal-video"
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="YoHD9XEInc0"
                onClose={() => setOpen(false)}
              />

              <button className="play-button" onClick={() => setOpen(true)}>
                <BiPlayCircle className="play-circle1" />
              </button>
              <div className="information">
                <span className="p-tag2">"Inception"</span>
                <span className="p-tag3">Watch the Trailer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Zodiac />
      <BlackSwan />
    </div>
  );
}

export default FrontPage;
