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
        <a className='footera' href={url}>
          <AiFillFacebook className="nav-icons" />
        </a>
        <a className='footera' href={url}>
          <FiInstagram className="nav-icons" />
        </a>
        <a className='footera'href={url}>
          <FaTwitch className="nav-icons" />
        </a>
        <a className='footera'href={url}>
          <GrTwitter className="nav-icons" />
        </a>
        <a className='footera'href={url}>
          <AiFillYoutube className="nav-icons" />
        </a>
      </div>
      <div className="middle-footer">
        <a className='footera'href={url}>
          Get The IMDb App <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>
          Help <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>
          Site Index <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>
          IMDbPro <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>IMDb TV </a>
        <a className='footera'href={url}>
          Box Office Mojo <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>
          IMDb Developer
          <BsBoxArrowInUpRight />{" "}
        </a>
      </div>
      <div className="bottom-footer">
        <a className='footera'href={url}>Press Room </a>
        <a className='footera'href={url}>
          Advertising
          <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>
          Jobs <BsBoxArrowInUpRight />{" "}
        </a>
        <a className='footera'href={url}>Conditions of Use </a>
        <a className='footera'href={url}>Privacy Policy </a>
        <a className='footera'href={url}>
          Internet-Based Ads
          <BsBoxArrowInUpRight />{" "}
        </a>
      </div>

      <div className="amazon1">an amazon company</div>
      <div className="copyright">
        <p>© 1990-2021 by IMDb.com, Inc</p>
      </div>
    </div>
  );
}

export default Footer;
