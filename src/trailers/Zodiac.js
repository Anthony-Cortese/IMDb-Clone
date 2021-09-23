import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { GoBookmark } from "react-icons/go";
import { BiPlayCircle } from "react-icons/bi";

function Zodiac() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="second-div2">
      <div className="background-img1">
        <div className="second-info">
          <div className="second-img">
            <GoBookmark className="watchlist-icon1" />
            <img
              className="inception-img"
              src="https://i.postimg.cc/Z0wfkWsy/Zodiac-hollywood-thriller-movies.jpg"
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
              videoId="yNncHPl1UXg"
              onClose={() => setOpen(false)}
            />
            <button className="play-button" onClick={() => setOpen(true)}>
              <BiPlayCircle className="play-circle1" />
            </button>
            <div className="information">
              <span className="p-tag2">"Zodiac"</span>
              <span className="p-tag3">Watch the Trailer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zodiac;
