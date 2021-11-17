import React from "react";
import { FaGripLinesVertical } from "react-icons/fa";
import { BiBookmarkPlus } from "react-icons/bi";
import ReactPlayer from "react-player";
import "./App.css";

function Trailers() {
  return (
    <div>
      <div className="soon">
        <h1 className="title2">
          <FaGripLinesVertical className="react-icon" />
          Coming soon to theaters ➤
        </h1>
        <p className="p-tag1">Trailers for upcoming releases</p>
      </div>

      <div className="coming-soon">
        <div className="new-movie-div">
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=_VJgaDE7W-c&t=1s"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jr6vgvhJlH0"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
          <div className="new-movie">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=_VJgaDE7W-c&t=1s"
              controls
              // playbackRate = {2}
              height="221.97px"
              width="394.63px"
            />
          </div>
        </div>
        <div className="info-trailer">
          <div className="trailer-info">
            <BiBookmarkPlus className="trailer-icon" />
            <div className="movie-dates">
              <p className="p-tag">March 18</p>
              <p className="p-tag">Underneath The Bottom</p>
            </div>
          </div>
          <div className="trailer-info">
            <BiBookmarkPlus className="trailer-icon" />
            <div className="movie-dates">
              <p className="p-tag">April 2</p>
              <p className="p-tag">Venice</p>
              <p className="p-tag4">Explicit Language Warning</p>
            </div>
          </div>
          <div className="trailer-info">
            <BiBookmarkPlus className="trailer-icon" />
            <div className="movie-dates">
              <p className="p-tag">March 18</p>
              <p className="p-tag">Underneath The Bottom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trailers;
