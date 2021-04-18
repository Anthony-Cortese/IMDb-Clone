import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'
import {BiPlayCircle} from 'react-icons/bi'

function Natalie() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='list1'>
                
                <img  className='featured-img' src="https://i.ibb.co/dj0GM9H/Screen-Shot-2018-11-30-at-12-58-42-PM.webp" alt="Screen-Shot-2018-11-30-at-12-58-42-PM" border="0"/>
                <div className='ads-title1'>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='pJO0XRfSYRU' onClose={() => setOpen(false)} />

                        <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle3' /></button>
                <p className='p-tag'>Natalie Portman through the years</p>
                </div>
                
                </div>
    )
}

export default Natalie
