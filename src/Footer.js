import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitch} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'
import {BsBoxArrowInUpRight} from 'react-icons/bs'

function Footer() {
    const url = ''
    return (
        <div className='main-footer'>
            <div className='top-footer'>
                <a href={url} ><AiFillFacebook className='nav-icons' /></a>
                <a href={url} ><FiInstagram className='nav-icons' /></a>
                <a href={url} ><FaTwitch className='nav-icons' /></a>
                <a href={url} ><GrTwitter className='nav-icons' /></a>
                <a href={url} ><AiFillYoutube className='nav-icons' /></a>
            </div>
            <div className='middle-footer'>
               <a href={url}>Get The IMDb App <BsBoxArrowInUpRight /> </a>
               <a href={url}>Help <BsBoxArrowInUpRight /> </a>
               <a href={url}>Site Index <BsBoxArrowInUpRight /> </a>
               <a href={url}>IMDbPro <BsBoxArrowInUpRight /> </a>
               <a href={url}>IMDb TV </a>
               <a href={url}>Box Office Mojo <BsBoxArrowInUpRight /> </a>
               <a href={url}>IMDb Developer<BsBoxArrowInUpRight /> </a>
            </div>
            <div className='bottom-footer'>
            <a href={url}>Press Room </a>
            <a href={url}>Advertising<BsBoxArrowInUpRight /> </a>
            <a href={url}>Jobs <BsBoxArrowInUpRight /> </a>
            <a href={url}>Conditions of Use </a>
            <a href={url}>Privacy Policy </a>
            <a href={url}>Internet-Based Ads<BsBoxArrowInUpRight /> </a>

            </div>

            <div className='amazon1'>an amazon company</div>
            <div className='copyright'><p>© 1990-2021 by IMDb.com, Inc</p></div>
            
        </div>
    )
}

export default Footer
