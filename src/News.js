import React from "react";
import { FaGripLinesVertical } from "react-icons/fa";
import "./App.css";

function News() {
  return (
    <div className="news-div">
      <div className="news-around">
        <div className="top">
          <h3 className="title2">
            <FaGripLinesVertical className="react-icon" />
            Top News ➤
          </h3>
        </div>

        <div className="top-news">
          <div className="news-article">
            <div className="article-img">
              <img
                className="article-img1"
                src="https://i.postimg.cc/FsYFtRjT/32928346-8710867-image-a-17-1599586674513.jpg"
                alt="hbz-leonardio-dicaprio-camila-morrone-lead-1581301807"
                border="0"
              />
            </div>
            <div className="article-info">
              <p className="p-tag" href="#">
                Leonardo DiCaprio and Camila Morrone soak up the sun in Malibu
              </p>
              <h6 className="p-tag">March 29, 2021</h6>
              <img
                className="black"
                src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
                alt="481679"
                border="0"
              />
            </div>
          </div>
          <div className="news-article">
            <div className="article-img">
              <img
                className="article-img1"
                src="https://i.postimg.cc/jdgy4ZTL/margot-robbie-tom-ackerley.jpg"
                alt="c0-Cqa-4t-400x400"
                border="0"
              />
            </div>
            <div className="article-info">
              <p className="p-tag" href="#">
                Margot Robbie Pregnancy Rumors Debunked
              </p>
              <h6 className="p-tag">April 11, 2021</h6>
              <img
                className="black"
                src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
                alt="481679"
                border="0"
              />
            </div>
          </div>
          <div className="news-article">
            <div className="article-img">
              <img
                className="article-img1"
                src="https://i.postimg.cc/LstQntMN/moby-natalie-portman.jpg"
                alt="Moby-and-Natalie-Portman-696x442"
                border="0"
              />
            </div>
            <div className="article-info">
              <p className="p-tag" href="#">
                Moby discusses Natalie Portman dating controversy, says it
                became hard to ignore
              </p>
              <h6 className="p-tag">April 12, 2021</h6>
              <img
                className="black"
                src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
                alt="481679"
                border="0"
              />
            </div>
          </div>
          <div className="news-article">
            <div className="article-img">
              <img
                className="article-img1"
                src="https://i.postimg.cc/zfBKYH12/alien-hulu.png"
                alt="Eo6-Vh9-NWEAEt-Lz-G"
                border="0"
              />
            </div>
            <div className="article-info">
              <p className="p-tag" href="#">
                FX announces Alien TV series from Fargo showrunner Noah Hawley
              </p>
              <h6 className="p-tag">December 10, 2020</h6>
              <img
                className="black"
                src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg"
                alt="481679"
                border="0"
              />
            </div>
          </div>
        </div>
        <div className="article-buttons">
          <button className="art-but">Top News</button>
          <button className="art-but">Movie News</button>
          <button className="art-but">TV News</button>
          <button className="art-but">Celebrity News</button>
        </div>
      </div>
    </div>
  );
}

export default News;
