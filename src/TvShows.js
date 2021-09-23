import React from "react";
import "./App.css";
import "./FanFavorites.css";
import { GoBookmark } from "react-icons/go";

function TvShows() {
  return (
    <div className="film-list">
      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/pVFcVPyX/americans-s2.jpg"
            alt="MV5-BMj-Iz-NTEz-MDY3-OF5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Mz-I5-NDI5-OA-V1"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆8.4</div>
          <div className="film-name">The Americans</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>

      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/D0wzgxSx/justified-movie-poster-2010-1020540956.jpg"
            alt="MV5-BMTM1-Mz-Y5-MDQ0-NV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Nj-Mx-NDM0-Nw-V1"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆8.6</div>
          <div className="film-name">Justified</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>

      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/8PTYZqPp/m-L0876-6cf8c6c4-251e-46ed-bc60-fdaf96cea11f-1024x1024.jpg"
            alt="MV5-BYTM3-YWVh-MDMt-Njcz-My00-NGEy-LWJh-ZDct-Yj-Nh-MTRk-NDE0-ZTI1-Xk-Ey-Xk-Fqc-Gde-QXVy-MTkx-Nj-Uy-N"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆8.8</div>
          <div className="film-name">Black Mirror</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>

      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/L5vFyScP/game-of-thrones-throne-of-the-dead-i73402.jpg"
            alt="MV5-BYTRi-NDQw-Yz-At-Mz-Vl-ZS00-NTI5-LWJj-Yj-Ut-Mzkw-NTUz-MWMx-ZTll-Xk-Ey-Xk-Fqc-Gde-QXVy-NDIz-Mzcw-"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆9.3</div>
          <div className="film-name">Game of Thrones</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>

      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/wvmhcTsW/True-Detective-Season-1-poster.jpg"
            alt="True-detective-poster-art"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆8.9</div>
          <div className="film-name">True Detective</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>

      <div className="all-info">
        <GoBookmark className="watchlist-icon2" />
        <div className="movie-poster">
          <img
            className="poster1"
            src="https://i.postimg.cc/9QkbGknQ/71e-AJ3-et-OL-AC-SY741.jpg"
            alt="MV5-BZj-Yy-Mm-Jj-YWUt-Zj-Bj-MS00-MWQz-LTk0-OWYt-Yz-U1-Mm-E3-Nz-Fh-Zj-Jk-Xk-Ey-Xk-Fqc-Gde-QXVy-MTkx-N"
            border="0"
          />
        </div>
        <div className="film-info">
          <div className="rating">☆8.7</div>
          <div className="film-name">Curb Your Enthusiasm</div>
          <div className="options">
            <button className="watch-button">Watch Options</button>
            <button className="watch-button1">▶︎ Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvShows;
