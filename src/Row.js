import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
    //run a piece of code when the component Row loads
    //when the Row loads this snippet of code will run
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]) //if there is any variable that is used inside the useEffect you must place that in the brackets -- must tell useEffect when using a variable outside the block
    //if [], run once when the row loads, and will not run again
    //if [movies], run once when the row loads, and will run again when movies changes
    console.log(movies)
    return (
         <div className='row'>
            <h6>{title}</h6>
             <div className='rowPosters'>

            {movies.map(movie => (
                <img src={`${base_url} ${movie.poster_path}`} alt={movie.name} />
            ))}
            </div> 
         </div>
    )
}

export default Row
