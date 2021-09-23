import ModalVideo from "react-modal-video";
import { BiPlayCircle } from "react-icons/bi";
import { useState } from "react";

function Depp() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="main-interviews3">
      <img
        className="editors-img"
        src="https://i.postimg.cc/654FbVtp/maxresdefault.jpg"
        alt="Depp"
        border="0"
      />
      <div className="ads-title3">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NEBJHAtaj_s"
          onClose={() => setOpen(false)}
        />
        <button className="play-button1" onClick={() => setOpen(true)}>
          <BiPlayCircle className="play-circle4" />
        </button>
        <p className="p-tag">An interview with Johnny Depp</p>
      </div>
    </div>
  );
}

export default Depp;
