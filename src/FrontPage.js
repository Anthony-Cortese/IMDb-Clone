import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BiPlayCircle} from 'react-icons/bi'
import {GoBookmark} from 'react-icons/go'
import './FrontPage.css'
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'


// const movies = [
//      {url: "https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"},
//      {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"},
// ]

// const posters = [
//     {url: "https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg"}
// ]


function FrontPage() {
    const [isOpen, setOpen] = useState(false)
    return <Carousel className ='carousel-arrow'
    renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                    className='arrow-butt'
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        left: "4rem",
                        backgroundColor: "yellow",
                      }}
                  >
                  </button>
                )
            }
            
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                  className='arrow-butt'
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        // right: "4.3em",
                        backgroundColor: "yellow",
                      }}
                  >
                  </button>
                )
      }

      
    

>
    <div className='second-div'>
    <div className='background-img'>
        {/* <img className='inception-img1' src="https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"alt="inception" border="0"/>  */}
    
                    <div className='second-info'>
                        <div className='second-img'>
                            <GoBookmark className='watchlist-icon1' />
                            <img className='inception-img' src="https://i.ibb.co/JxFRNWr/7106u-LYY2-LL-AC-SL1111.jpg" alt="inception" border="0"/>
                        </div>
                        <div className='second-front'>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="YoHD9XEInc0" onClose={() => setOpen(false)} />

                       <button className="btn-primary" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle1' /></button>
                        <div className='information'>
                        <span className='p-tag2'>"Inception"</span>
                        <span className='p-tag3'>Watch the Trailer</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='second-div1'>
    <div className='background-img1'>
        {/* <img className='inception-img1' src="https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"alt="inception" border="0"/>  */}
    
                    <div className='second-info'>
                        <div className='second-img'>
                            <GoBookmark className='watchlist-icon1' />
                            <img className='inception-img' src="https://i.ibb.co/mRHjTfg/8cf50be9d4b8f459a1290c4fafa199c2.jpg" alt="8cf50be9d4b8f459a1290c4fafa199c2" border="0"/>
                        </div>
                        <div className='second-front'>
                            <BiPlayCircle className='play-circle1' />
                        <div className='information'>
                        <span className='p-tag2'>"Zodiac"</span>
                        <span className='p-tag3'>Watch the Trailer</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='second-div2'>
    <div className='background-img2'>
        {/* <img className='inception-img1' src="https://i.ibb.co/7bXjrGF/109300-inception-617-409-compressed.jpg"alt="inception" border="0"/>  */}

                    <div className='second-info'>
                        <div className='second-img'>
                            <GoBookmark className='watchlist-icon1' />
                            <img className='inception-img' src="https://i.ibb.co/bHs2BWH/024543715061.jpg" alt="8cf50be9d4b8f459a1290c4fafa199c2" border="0"/>
                        </div>
                        <div className='second-front'>
                            <BiPlayCircle className='play-circle1' />
                        <div className='information'>
                        <span className='p-tag2'>"Black Swan"</span>
                        <span className='p-tag3'>Watch the Trailer</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>







                

        </Carousel>
        

        

}

export default FrontPage
