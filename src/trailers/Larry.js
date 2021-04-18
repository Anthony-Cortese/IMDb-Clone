import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'
import {BiPlayCircle} from 'react-icons/bi'

function Larry() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='main-interviews2'>
                        <img className='editors-img' src="https://i.ibb.co/0nKTb2h/hqdefault.jpg" alt="hqdefault" border="0"/>
                        <div className='ads-title3'>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='_unE0NsfrIs' onClose={() => setOpen(false)} />

                        <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle4' /></button>
                <p className='p-tag'>Larry David talks Curb Your Enthusiasm</p>
                        </div>
                        </div>
    )
}

export default Larry

