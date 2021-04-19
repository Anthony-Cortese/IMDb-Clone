import React from "react";
import { Link } from "react-router-dom";
//import {slide as Menu} from 'react-burger-menu'
import { MdLocalMovies } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoTv } from "react-icons/io5";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import "./OpenMenu.css";

function OpenMenu() {
  const url = "";
  return (
    <div className="navigation">
      <div className="page-logo">
        <Link to="/">
          {" "}
          <img
            className="yellow"
            src="https://i.ibb.co/C8v8qd6/pngwing-com-3.png"
            alt="imdb"
            border="0"
          />
        </Link>
        <Link to="/">
          <img
            className="x"
            src="https://i.ibb.co/4j7zZT7/pngwing-com-4.png"
            alt="x"
            border="0"
          />
        </Link>
      </div>

      <div className="main-menu">
        <div className="movie-celebs">
          <div className="movie-menu">
            <span className="movies">
              <MdLocalMovies className="movie-icon" /> Movies
            </span>
            <a className="lists" href={url}>
              Release Calendar
            </a>
            <a className="lists" href={url}>
              DVD & Blu-ray Releases
            </a>
            <a className="lists" href={url}>
              Top Rated Movies
            </a>
            <a className="lists" href={url}>
              Most Popular Movies
            </a>
            <a className="lists" href={url}>
              Browse Movies by Genre
            </a>
            <a className="lists" href={url}>
              Top Box Office
            </a>
            <a className="lists" href={url}>
              Showtimes & Tickets
            </a>
            <a className="lists" href={url}>
              In Theatres
            </a>
            <a className="lists" href={url}>
              Coming Soon
            </a>
            <a className="lists" href={url}>
              Movie News
            </a>
            <a className="lists" href={url}>
              India Movie Spotlight
            </a>
          </div>
          <div className="celebs-menu">
            <span className="celebs">
              <BsFillPeopleFill className="celebs-icon" /> Celebs
            </span>
            <a className="lists" href={url}>
              Born Today
            </a>
            <a className="lists" href={url}>
              Most Popular
            </a>
            <a className="lists" href={url}>
              Celebrity News
            </a>
          </div>
        </div>
        <div className="tv-watch">
          <div className="tvshow-menu">
            <span className="tvshow">
              <IoTv className="celebs-icon" /> TV Shows
            </span>
            <a className="lists" href={url}>
              What's on TV & Streaming
            </a>
            <a className="lists" href={url}>
              Top Rated Shows
            </a>
            <a className="lists" href={url}>
              Most Popular Shows
            </a>
            <a className="lists" href={url}>
              Browse TV Shows by Genre
            </a>
            <a className="lists" href={url}>
              TV News
            </a>
            <a className="lists" href={url}>
              India TV Spotlight
            </a>
          </div>
          {/* <div className='watch-menu'>
                    <span className='watch'><BsFillPeopleFill className='celebs-icon' /> Watch</span>
                    <a href={url}>What to Watch</a>
                    <a href={url}>Latest Trailers</a>
                    <a href={url}>IMDb TV</a>
                    <a href={url}>IMDb Originals</a>
                    <a href={url}>IMDb Picks</a>
                    <a href={url}>IMDb Podcasts</a>
                </div> */}
          <div className="watch-menu">
            <span className="awards">
              <BsFillCollectionPlayFill className="celebs-icon" /> Watch
            </span>
            <a className="lists" href={url}>
              What to Watch
            </a>
            <a className="lists" href={url}>
              Latest Trailers
            </a>
            <a className="lists" href={url}>
              IMDb TV
            </a>
            <a className="lists" href={url}>
              IMDb Originals
            </a>
            <a className="lists" href={url}>
              IMDb Picks
            </a>
            <a className="lists" href={url}>
              IMDb Podcasts
            </a>
          </div>
        </div>
        <div className="awards-community">
          <div className="awards-menu">
            <span className="awards">
              <GiAlliedStar className="celebs-icon" /> Awards & Events
            </span>
            <a className="lists" href={url}>
              Oscars
            </a>
            <a className="lists" href={url}>
              Best Picture Winners
            </a>
            <a className="lists" href={url}>
              Golden Globes
            </a>
            <a className="lists" href={url}>
              Emmys
            </a>
            <a className="lists" href={url}>
              Women's History Month
            </a>
            <a className="lists" href={url}>
              STARmeter Awards
            </a>
            <a className="lists" href={url}>
              San Diego Comic-Con
            </a>
            <a className="lists" href={url}>
              New York Comic-Con
            </a>
            <a className="lists" href={url}>
              Sundance Film Festival
            </a>
            <a className="lists" href={url}>
              Toronto Int'l Film Festival
            </a>
            <a className="lists" href={url}>
              Awards Central
            </a>
            <a className="lists" href={url}>
              Festival Central
            </a>
            <a className="lists" href={url}>
              All Events
            </a>
          </div>
          <div className="community-menu">
            <span className="community">
              <BiWorld className="celebs-icon" /> Community
            </span>
            <a className="lists" href={url}>
              Help Center
            </a>
            <a className="lists" href={url}>
              Contributer Zone
            </a>
            <a className="lists" href={url}>
              Polls
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenMenu;
