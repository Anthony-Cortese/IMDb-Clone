import React, { useState } from "react";
import { GoBookmark } from "react-icons/go";
import { BiPlayCircle } from "react-icons/bi";
import ModalVideo from "react-modal-video";
import "../FrontPage.css";

function BlackSwan() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="second-div3">
      <div className="background-img2">
        <div className="second-info">
          <div className="second-img">
            <GoBookmark className="watchlist-icon1" />
            <img
              className="inception-img"
              src="https://i.postimg.cc/4KKGtCKW/black-swan-poster.jpg"
              alt="8cf50be9d4b8f459a1290c4fafa199c2"
              border="0"
            />
          </div>
          <div className="second-front">
            <ModalVideo
              className="modal-video"
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="5jaI1XOB-bs"
              onClose={() => setOpen(false)}
            />
            <button className="play-button" onClick={() => setOpen(true)}>
              <BiPlayCircle className="play-circle1" />
            </button>
            <div className="information">
              <span className="p-tag2">"Black Swan"</span>
              <span className="p-tag3">Watch the Trailer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackSwan;
