import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { BiPlayCircle } from "react-icons/bi";
function Almost() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="trailer3">
      <div className="trailer-img">
        <img
          className="trailer-img1"
          src="https://i.ibb.co/kJSJWdv/51-Lr0-Zu-Ctx-L-AC.jpg"
          alt="51-Lr0-Zu-Ctx-L-AC"
          border="0"
        />
      </div>
      <div className="trailer-title">
        <ModalVideo
          className="modal-video"
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="aQXh_AaJXaM"
          onClose={() => setOpen(false)}
        />

        <button className="play-button1" onClick={() => setOpen(true)}>
          <BiPlayCircle className="play-circle" />
        </button>
        <span className="p-tag">"Almost Famous"</span>
        <span className="p-tag1">Watch the New Trailer</span>
      </div>
    </div>
  );
}

export default Almost;
