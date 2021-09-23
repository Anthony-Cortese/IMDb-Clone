import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { BiBookmarkPlus } from "react-icons/bi";
import Dropdown from "./Dropdown";

function NavBar() {
  const url = "";
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  //   const [sidebar, setSidebar] = useState(false);

  //   /const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => setClick(!click);

  return (
    <header className="main-navbar">
      <div className="imdb-logo">
        <div className="media-menu">
          {/* <button id='menu-div' onClick={() => setSidebar(sidebar => !sidebar)} className='media-menu-button'><TiThMenu className='nav-dots' />
            </button> */}
          {/* {sidebar && <Sidebar />} */}
        </div>

        <Link to="/">
          <img
            className="imdb-image"
            src="https://i.postimg.cc/pTx0Mp44/1200px-IMDB-Logo-2016-svg.png"
            alt="kisspng-computer-icons-television-logo-scalable-vector-gra-imdb-icon-free-of-cinema-icons-5ba31fc4e3"
            border="0"
          />
        </Link>
      </div>
      <div className="menu">
        <Link to="/menu">
          <button id="menu-div" onClick={handleClick} className="menu-button">
            <TiThMenu className="t-dots" />
            <span className="menu-font">Menu</span>
          </button>
        </Link>
      </div>
      <Link to="/IMDbTv">
        {" "}
        <div className="tv">
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="imdb-tv"
          >
            <span className="font">IMDb</span>
            <span className="font1">tv</span>
          </button>
          {isShown && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="show-page"
            >
              <div className="small-header">
                <h1 className="navbar-font">Featured</h1>{" "}
                <a href={url}>Browse More Titles ▹</a>
              </div>
              <div className="movie-poster">
                <div className="movie-posters">
                  <img
                    className="movie-posters"
                    src="https://i.postimg.cc/d1BzB7VJ/Uncut-Gems-Movie-Art-print-Silk-poster-Home-Wall-Decor.jpg"
                    alt="MV5-BZDhk-Mj-Uy-Yj-It-YWVk-Yi00-YTM5-LWE4-MGEt-Y2-Fl-Mj-A3-OThl-Ym-Zh-Xk-Ey-Xk-Fqc-Gde-QXVy-ODk4-OTc"
                    border="0"
                  />
                </div>
                <div className="movie-posters">
                  <img
                    className="movie-posters"
                    src="https://i.postimg.cc/Dw30HDcm/41f-Jhub0c2-L-AC.jpg"
                    alt="MV5-BZDhk-Mj-Uy-Yj-It-YWVk-Yi00-YTM5-LWE4-MGEt-Y2-Fl-Mj-A3-OThl-Ym-Zh-Xk-Ey-Xk-Fqc-Gde-QXVy-ODk4-OTc"
                    border="0"
                  />
                </div>
                <div className="movie-posters">
                  <img
                    className="movie-posters"
                    src="https://i.postimg.cc/8cM88y1m/91kk-GWtyq-TL-AC-SY741.jpg"
                    alt="MV5-BMGUw-Zjli-MTAt-Nz-Ax-Zi00-MWNi-LWE2-Nzgt-ZGUx-MGQx-Zjhh-NDRi-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-U1-Nz-U3-"
                    border="0"
                  />
                </div>
              </div>
            </div>
          )}
        </div>{" "}
      </Link>
      <div className="all">
        <button className="all-button" onClick={() => setOpen((open) => !open)}>
          All ▾
        </button>
        {open && <Dropdown />}
      </div>
      <div className="search">
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search IMDb"
        ></input>{" "}
        <AiOutlineSearch className="search-icon" />
      </div>
      {/* <div className='pro'> */}
      <Link to="/ImdbPro">
        <button className="imdb-pro">
          <span className="font2">IMDb</span>Pro
        </button>
      </Link>
      {/* </div> */}

      <div className="line"></div>

      {/* <div className='watch'> */}
      <Link to="/Watchlist">
        <button onClick={handleClick} className="watchlist">
          <BiBookmarkPlus className="checkmark" /> Watchlist
        </button>
      </Link>
      {/* </div> */}

      {/* <div className='sign'> */}
      <Link to="/SignIn">
        <button onClick={handleClick} className="sign-in">
          Sign In
        </button>
      </Link>
      {/* </div> */}
    </header>
  );
}

export default NavBar;
