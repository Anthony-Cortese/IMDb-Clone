import React from 'react'
import ReactPlayer from 'react-player'

function Inception() {
    return (
            <ReactPlayer
                        url='https://www.youtube.com/watch?v=YoHD9XEInc0'
                        controls
                        // playbackRate = {2}
                        width = "896px"
                        height = "504px" 
                     />
        )
}

export default Inception

  //  <Carousel className ='carousel-arrow'
//     renderArrowNext={(onClickHandler, hasNext, label) =>
//                 hasNext && (
//                     <button
//                     className='arrow-butt'
//                     type="button"
//                     onClick={onClickHandler}
//                     title={label}
//                     style={{
//                         left: "4rem",
//                         backgroundColor: "yellow",
//                       }}
//                   >
//                   </button>
//                 )
//             }
            
//             renderArrowPrev={(onClickHandler, hasPrev, label) =>
//                 hasPrev && (
//                   <button
//                   className='arrow-butt'
//                     type="button"
//                     onClick={onClickHandler}
//                     title={label}
//                     style={{
//                         // right: "4.3em",
//                         backgroundColor: "yellow",
//                       }}
//                   >
//                   </button>
//                 )
//       }

      
    

// >

// {/* <div className='second-div1'>
//     <div className='background-img1'>
//                     <div className='second-info'>
//                         <div className='second-img'>
//                             <GoBookmark className='watchlist-icon1' />
//                             <img className='inception-img' src="https://i.ibb.co/mRHjTfg/8cf50be9d4b8f459a1290c4fafa199c2.jpg" alt="8cf50be9d4b8f459a1290c4fafa199c2" border="0"/>
//                         </div>
//                         <div className='second-front'>

//                         <button className="play-button" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle1' /></button>
//                         <div className='information'>
//                         <span className='p-tag2'>"Zodiac"</span>
//                         <span className='p-tag3'>Watch the Trailer</span>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>

//                 <div className='second-div2'>
//     <div className='background-img2'>

//                     <div className='second-info'>
//                         <div className='second-img'>
//                             <GoBookmark className='watchlist-icon1' />
//                             <img className='inception-img' src="https://i.ibb.co/bHs2BWH/024543715061.jpg" alt="8cf50be9d4b8f459a1290c4fafa199c2" border="0"/>
//                         </div>
//                         <div className='second-front'>
//                             <BiPlayCircle className='play-circle1' />
//                         <div className='information'>
//                         <span className='p-tag2'>"Black Swan"</span>
//                         <span className='p-tag3'>Watch the Trailer</span>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>   */}
