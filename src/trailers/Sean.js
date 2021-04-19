import React, { useState } from "react";
import ReactPlayer from "react-player";
import ModalVideo from "react-modal-video";
import { BiBookmarkPlus } from "react-icons/bi";
import { FaGripLinesVertical } from "react-icons/fa";
import { BiPlayCircle } from "react-icons/bi";
import { GoBookmark } from "react-icons/go";
// import PlayerContaier from 'react-player'

function Sean() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="trailer1">
      <div className="trailer-img">
        <img
          className="trailer-img1"
          src="https://i.ibb.co/6Jncq8t/83647855-10158906901436756-8680783986512887808-n.jpg"
          alt="83647855-10158906901436756-8680783986512887808-n"
          border="0"
        />
      </div>
      <div className="trailer-title">
        <ModalVideo
          className="modal-video"
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="zg3Od09xS-s"
          onClose={() => setOpen(false)}
        />

        <button className="play-button1" onClick={() => setOpen(true)}>
          <BiPlayCircle className="play-circle" />
        </button>
        <span className="p-tag">"Sean Cortese"</span>
        <span className="p-tag1">Watch his new monologue</span>
      </div>
    </div>
  );
}

export default Sean;
