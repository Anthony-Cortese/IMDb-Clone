import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaTwitch } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function Footer() {
  const url = "";
  return (
    <div className="main-footer">
      <div className="top-footer">
        <p className="footera" href={url}>
          <AiFillFacebook className="nav-icons" />
        </p>
        <p className="footera" href={url}>
          <FiInstagram className="nav-icons" />
        </p>
        <p className="footera" href={url}>
          <FaTwitch className="nav-icons" />
        </p>
        <p className="footera" href={url}>
          <GrTwitter className="nav-icons" />
        </p>
        <p className="footera" href={url}>
          <AiFillYoutube className="nav-icons" />
        </p>
      </div>
      <div className="middle-footer">
        <p className="footera" href={url}>
          Get The IMDb App <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          Help <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          Site Index <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          IMDbPro <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          IMDb TV{" "}
        </p>
        <p className="footera" href={url}>
          Box Office Mojo <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          IMDb Developer
          <BsBoxArrowInUpRight />{" "}
        </p>
      </div>
      <div className="bottom-footer">
        <p className="footera" href={url}>
          Press Room{" "}
        </p>
        <p className="footera" href={url}>
          Advertising
          <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          Jobs <BsBoxArrowInUpRight />{" "}
        </p>
        <p className="footera" href={url}>
          Conditions of Use{" "}
        </p>
        <p className="footera" href={url}>
          Privacy Policy{" "}
        </p>
        <p className="footera" href={url}>
          Internet-Based Ads
          <BsBoxArrowInUpRight />{" "}
        </p>
      </div>

      <div className="amazon1">an amazon company</div>
      <div className="copyright">
        <p>© 1990-2021 by IMDb.com, Inc</p>
      </div>
    </div>
  );
}

export default Footer;
