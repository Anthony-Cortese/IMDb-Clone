import React from 'react'
import Row from './Row'
import './Row.css'
import './ImdbTv.css'
import requests from './requests'

function ImdbTv() {
    return (
        <div className='imdbtv-div'>
            <div className='main-ads'>
                <img className='main-ads-img' src="https://i.ibb.co/Dp6rjKr/71pubpl-JHn-L.jpg" alt="71pubpl-JHn-L" border="0"/>
            </div>

            <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isLargeRow={true} />
            <Row title="COMEDIES" fetchUrl={requests.fetchComedyMovies} isLargeRow={true} />
            <Row title="CHILLS AND THRILLS" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} />
            <Row title="DATE NIGHT PICKS" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isLargeRow={true} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/> 
        </div>
    )
}

export default ImdbTv
