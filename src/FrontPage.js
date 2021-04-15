import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BiPlayCircle} from 'react-icons/bi'
import {GoBookmark} from 'react-icons/go'
import './FrontPage.css'
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
// import 'react-modal-video/scss/modal-video.scss'
import './Trailers.scss'
// import 'node_modules/react-modal-video/scss/modal-video.scss';


// const movies = [
//      {url: "https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"},
//      {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"},
// ]

// const posters = [
//     {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"}
// ]


function FrontPage() {
    const [isOpen, setOpen] = useState(false)

    return (
    <div className='second-div'>
    <div className='background-img'>
    
                    <div className='second-info'>
                        <div className='second-img'>
                            <GoBookmark className='watchlist-icon1' />
                            <img className='inception-img' src="https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg" alt="inception" border="0"/>
                        </div>
                        <div className='second-front'>
                        <ModalVideo className='modal-video' channel='youtube' autoplay isOpen={isOpen} videoId="YoHD9XEInc0" onClose={() => setOpen(false)} />

                       <button className="play-button" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle1' /></button>
                        <div className='information'>
                        <span className='p-tag2'>"Inception"</span>
                        <span className='p-tag3'>Watch the Trailer</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

    )     
}
    
     

                







                

        
        

        

export default FrontPage
