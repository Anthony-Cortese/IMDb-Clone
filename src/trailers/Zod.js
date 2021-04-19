import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { BiBookmarkPlus } from "react-icons/bi";
import { FaGripLinesVertical } from "react-icons/fa";
import { BiPlayCircle } from "react-icons/bi";

function Zod() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="trailer1">
      <div className="trailer-img">
        <img
          className="trailer-img1"
          src="https://i.ibb.co/0mDQ22q/PHOTOGRAPHS-TO-BE-USED-SOLELY-FOR-ADVERTISING-PROMOTION-PUBLICITY-OR-REVIEWS-OF-THIS-SPECIFIC-MOTION.jpg"
          alt="PHOTOGRAPHS-TO-BE-USED-SOLELY-FOR-ADVERTISING-PROMOTION-PUBLICITY-OR-REVIEWS-OF-THIS-SPECIFIC-MOTION"
          border="0"
        />
      </div>
      <div className="trailer-title">
        <ModalVideo
          className="modal-video"
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="EXeTwQWrcwY"
          onClose={() => setOpen(false)}
        />

        <button className="play-button1" onClick={() => setOpen(true)}>
          <BiPlayCircle className="play-circle" />
        </button>
        <span className="p-tag">"The Dark Knight"</span>
        <span className="p-tag1">Watch the trailer</span>
      </div>
    </div>
  );
}

export default Zod;
