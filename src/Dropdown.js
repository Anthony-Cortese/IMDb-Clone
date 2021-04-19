import React from "react";
import "./Dropdown.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import { RiLayoutRightFill } from "react-icons/ri";
function Dropdown() {
  const url = "";
  return (
    <div className="dropdown-menu">
      <a className="dropdown" href={url}>
        <AiOutlineSearch className="dropdown-icon" /> All
      </a>
      <a className="dropdown" href={url}>
        <MdLocalMovies className="dropdown-icon" /> Titles
      </a>
      <a className="dropdown" href={url}>
        <IoTv className="dropdown-icon" /> Tv Episodes
      </a>
      <a className="dropdown" href={url}>
        <BsFillPeopleFill className="dropdown-icon" /> Celebs
      </a>
      <a className="dropdown" href={url}>
        <BiBuildings className="dropdown-icon" /> Companies
      </a>
      <a className="dropdown" href={url}>
        <RiLayoutRightFill className="dropdown-icon" /> Keywords
      </a>
      <div className="line1"></div>
      <a className="dropdown" href={url}>
        <RiFileSearchFill className="dropdown-icon" /> Advanced Search ➤
      </a>
    </div>
  );
}

export default Dropdown;
