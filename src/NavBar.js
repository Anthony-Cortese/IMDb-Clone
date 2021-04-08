import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { TiThMenu } from 'react-icons/ti'
import { BiBookmarkPlus } from 'react-icons/bi'
import OpenMenu from './OpenMenu'
import Dropdown from './Dropdown'

function NavBar() {
    const url = ''
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => setClick(!click);
    
    return (

        <header className='main-navbar'>
            <div className='imdb-logo'>
                
              <Link to='/'><img className='imdb-image' src="https://i.ibb.co/C8v8qd6/pngwing-com-3.png" alt="imdb" border="0"/>
                </Link>
            </div>
            <div className='menu'>
            
                    <Link to='/menu'><button id='menu-div' onClick={handleClick} className='menu-button'><TiThMenu className='t-dots' />
                     <span className='menu-font'>Menu</span></button></Link>
            
                
            
            </div>
            <div className='tv'>
                <button onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='imdb-tv'>
                    <span className='font'>IMDb</span>
                    <span className='font1'>tv</span>
                </button>
                {isShown && (
                    <div className='show-page'>
                        <div className='small-header'>
                            <h1>Featured</h1> <a href={url}>Browse More Titles ▹</a>
                        </div>
                        <div className='movie-poster'>
                        <div className='movie-posters'>

                        </div>
                        <div className='movie-posters1'>
                            
                        </div>
                        <div className='movie-posters2'>
                            
                        </div>
                        </div>
                        
                    </div>    
                )}
            </div>
            <div className='all'>
                <button className='all-button' onClick={() => setOpen(open => !open)}>All ▾</button>
                {open && <Dropdown />}
            </div>
            <div className='search'>
                <input 
                className='input'
                type='text'
                name='query'
                placeholder='Search IMDb'
                >
                   
                </input> <AiOutlineSearch className='search-icon'/>
                    
            </div>
            {/* <div className='pro'> */}
                <Link>
                    <button className='imdb-pro'><span className='font2'>IMDb</span>Pro</button>
                </Link>   
            {/* </div> */}

            <div className='line'></div>

            {/* <div className='watch'> */}
            <Link to='/Watchlist'><button onClick={handleClick} className='watchlist'><BiBookmarkPlus className='checkmark' /> Watchlist</button></Link>
            {/* </div> */}

            <div className='sign'>
            <Link to='/SignIn'><button onClick={handleClick} className='sign-in'>Sign In</button></Link>
            </div>
        </header>
            
    )
}

export default NavBar
            
                
            
            

