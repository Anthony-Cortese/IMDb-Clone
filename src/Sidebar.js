import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import { RiLayoutRightFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import "./Dropdown.css";
import "./Sidebar.css";
import "./NavBar.css";

function Sidebar() {
  const url = "";

  return (
    <div className="navbar">
      <div className="dropdown">X</div>
      {/* <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'></li> */}

      <a className="dropdown" href={url}>
        <AiOutlineSearch className="dropdown-icon" />{" "}
        <span className="font">IMDb</span>
        <span className="font1">tv</span>
        <RiArrowRightSLine />
      </a>
      <div className="line1"></div>

      <a className="dropdown" href={url}>
        <MdLocalMovies className="dropdown-icon" /> Movies <IoIosArrowDown />
      </a>
      <a className="dropdown" href={url}>
        <IoTv className="dropdown-icon" /> TV Shows <IoIosArrowDown />
      </a>
      <a className="dropdown" href={url}>
        <BsFillPeopleFill className="dropdown-icon" /> Watch <IoIosArrowDown />
      </a>
      <a className="dropdown" href={url}>
        <BiBuildings className="dropdown-icon" /> Awards & Events
        <IoIosArrowDown />
      </a>
      <a className="dropdown" href={url}>
        <RiLayoutRightFill className="dropdown-icon" /> Celebs
        <IoIosArrowDown />
      </a>
      <a className="dropdown" href={url}>
        <AiOutlineSearch className="dropdown-icon" /> Community
        <IoIosArrowDown />
      </a>
      <div className="line1"></div>
      <a className="dropdown" href={url}>
        <RiFileSearchFill className="dropdown-icon" /> IMDbPro
      </a>
      <p>For Industry Professionals</p>
      {/* </ul>
            </nav> */}
    </div>
    // <>
    //     <div className='sidebar'>
    //         <FaIcons.FaBars onClick={showSidebar} />
    //     </div>
    //     <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
    //       <ul className='sidebar-items' onClick={showSidebar}>
    //         <li className='sidebar-toggle'>
    //           <Link to='#' className='menu-sidebar'>
    //             <AiIcons.AiOutlineClose />
    //           </Link>
    //         </li>
    //         {SidebarData.map((item, index) => {
    //           return (
    //             <li key={index} className={item.cName}>
    //               <Link to={item.path}>
    //                 {item.icon}
    //                 <span>{item.title}</span>
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </nav>
    // </>
  );
}

export default Sidebar;
