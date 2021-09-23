IMDb Clone built from scratch.

Fully functional Navigation bar.

Each button takes you to a new page, some buttons even have hover capabilities.

Called an API for the IMDbTV page -- each movie poster is clickable which reveals a trailer from youtube.

The play buttons on the home screen are fully functional and bring up a trailer which is unique to the button pressed.

The main movie can change with a horizontal scroll.

The Trending celebrities can update with a horizontal scroll.

The website is fully responsive, and the information in Featured Today, Fan Favorites, Exclusive Videos, Explore what is streaming, On TV, Trending Celebrities, and Top News is all available with a horizontal scroll.

INCEPTION:
<img
                className="inception-img"
                src="https://i.postimg.cc/F1ySM8Pd/leonardo-dicaprio-in-inception-hd.jpg"
                border="0"
                alt="leonardo-dicaprio-in-inception-hd"
              />

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
{/_ <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
<ul className='nav-menu-items' onClick={showSidebar}>
<li className='navbar-toggle'></li> _/}

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
