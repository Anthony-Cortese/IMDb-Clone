import React from "react";
import Row from "./Row";
import "./Row.css";
import "./ImdbTv.css";
import requests from "./requests";

function ImdbTv() {
  return (
    <div className="imdbtv-div">
      <div className="main-ads">
        <img
          className="main-ads-img"
          src="https://i.ibb.co/z6LmpQx/imdb-tv.jpg"
          alt="71pubpl-JHn-L"
          border="0"
        />
      </div>
      <h3 className="row-title">TRENDING NOW</h3>
      <Row
        className="trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <h3 className="row-title">TOP RATED</h3>
      <Row fetchUrl={requests.fetchTopRated} isLargeRow={true} />
      <h3 className="row-title">ACTION MOVIES</h3>
      <Row fetchUrl={requests.fetchActionMovies} isLargeRow={true} />
      <h3 className="row-title">COMEDIES</h3>
      <Row fetchUrl={requests.fetchComedyMovies} isLargeRow={true} />
      <h3 className="row-title">CHILLS AND THRILLS</h3>
      <Row fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} />
      <h3 className="row-title">DATE NIGHT PICKS</h3>
      <Row fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
      <h3 className="row-title">DOCUMENTARIES</h3>
      <Row fetchUrl={requests.fetchDocumentaries} isLargeRow={true} />
      <h3 className="row-title">NETFLIX ORIGINALS</h3>
      <Row fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />

      <div className="questions">
        <p className="row-title1">Do you have questions about IMDb TV?</p>
        <button className="regular-button">Learn More</button>
      </div>
    </div>
  );
}

export default ImdbTv;
