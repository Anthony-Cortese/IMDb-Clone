import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
//import Featured from './Featured'
import './Home.css'
import './FanFavorites.css'
import {BiBookmarkPlus} from 'react-icons/bi'
import {FaGripLinesVertical} from 'react-icons/fa'
import {BiPlayCircle} from 'react-icons/bi'
import {GoBookmark} from 'react-icons/go'
import FrontPage from './FrontPage'
import FanFavorites from './FanFavorites'
import TvShows from './TvShows'
import Trailers from './Trailers'

import ModalVideo from 'react-modal-video'
// import 'react-modal-video/scss/modal-video.scss'
import './Trailers.scss'
import Featured from './Featured'
import News from './News'



function Home() {
    const [isOpen, setOpen] = useState(false)
     
    return (
        <div className='big-div'>
            <div className='first-div'>

            
            <div className='ads-div'>
            <img className='ad-img' src="https://i.ibb.co/z6LmpQx/imdb-tv.jpg" alt="imdb-tv" border="0"/>
                </div>
           </div>
            <div className='main-div'>
            
                <FrontPage />
                    <div className='left-side'>
                        <div className='up-next1'><span className='up-next'>Up Next</span></div>  
                            <div className='trailer1'>
                                <div className='trailer-img'>
                                <img className='trailer-img1' src="https://i.ibb.co/6Jncq8t/83647855-10158906901436756-8680783986512887808-n.jpg" alt="83647855-10158906901436756-8680783986512887808-n" border="0"/>
                                </div>
                                <div className='trailer-title'>
                                <ModalVideo className='modal-video' channel='youtube' autoplay isOpen={isOpen} videoId='https://www.youtube.com/watch?v=dQaKtMkgP5I&t=4s' onClose={() => setOpen(false)} />

                                    <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle' /></button>
                                    <span className='p-tag'>"Sean Cortese"</span>
                                    <span className='p-tag1'>Watch his new monologue</span>
                                </div>
                
                                    
                                
                            </div>
                            <div className='trailer2'>
                            <div className='trailer-img'>
                            <img className='trailer-img1' src="https://i.ibb.co/vmDFqY6/MV5-BMTIz-MDc4-Mz-A2-Ml5-BMl5-Ban-Bn-Xk-Ft-ZTcw-ODU0-Mz-A3-MQ-V1.jpg" alt="MV5-BMTIz-MDc4-Mz-A2-Ml5-BMl5-Ban-Bn-Xk-Ft-ZTcw-ODU0-Mz-A3-MQ-V1" border="0"/>
                                    </div>
                                    <div className='trailer-title'>
                                    {/* <ModalVideo className='modal-video' channel='youtube' autoplay isOpen={isOpen} videoId="EXeTwQWrcwY" onClose={() => setOpen(false)} /> */}

                                    <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle' /></button>
                                        <span className='p-tag'>"The Dark Knight"</span>
                                        <span className='p-tag1'>Watch the New Trailer</span>
                                    </div>

                            </div>
                            <div className='trailer3'>
                            <div className='trailer-img'>
                            <img className='trailer-img1' src="https://i.ibb.co/QYnGdVY/MV5-BZjdk-OTU3-MDkt-N2-Ix-OS00-OGEy-LWFm-Mjkt-Y2-Fi-Mm-Zk-NWIy-ODZi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-ODk2.jpg" alt="MV5-BZjdk-OTU3-MDkt-N2-Ix-OS00-OGEy-LWFm-Mjkt-Y2-Fi-Mm-Zk-NWIy-ODZi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-ODk2-" border="0"/>    
                                    </div>
                                    <div className='trailer-title'>
                                    {/* <ModalVideo className='modal-video' channel='youtube' autoplay isOpen={isOpen} videoId="2LqzF5WauAw" onClose={() => setOpen(false)} /> */}

                                    <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle' /></button>
                                        <span className='p-tag'>"Intersteller"</span>
                                        <span className='p-tag1'>Watch the New Trailer</span>
                                    </div>

                            </div>
                            <a className='browse' href='www' >Browse Trailers  ➤</a>
                    </div>
            </div>
            
            
            
            
            
            <div className='featured-div'>
             <Featured />
            </div>

                    <div className='what-watch'>
                        <h3 className='title1'>What to watch</h3>
                        <h6 className='get-more'>Get more recommendations ➤</h6>
                    </div>

                    

                    <div className='watchlist-div'>
                    <div className='from-watchlist'>
                        <h1 className='title2'><FaGripLinesVertical className='react-icon' /> From your WatchList ➤</h1>
                    </div>
                        <div className='watch-list'>
                            <BiBookmarkPlus className='watchlist-icon' />
                            <p className='p-tag'><strong>Sign in to access your Watchlist</strong></p>
                            <p className='p-tag'>Save shows and movies to keep track of what you want to watch.</p>
                            <button onClick="href='./SignIn'"className='regular-button'>Sign in to IMDb</button>
                        </div>
                    </div>
                        
                    
                    
                        <FanFavorites />
                    
                        
                    


                    <div className='more-to-watch'>
                        <h3 className='title2'><FaGripLinesVertical className='react-icon' />More to watch</h3>
                        <p className='p-tag1'>IMDb helps you select the perfect next show or movie to watch</p>
                        <button className='more-button'>Watch Guide</button>
                        <button className='more-button'>Most Popular</button>

                    </div>

                    <div className='exclusive-videos'>
                        <h1 className='title1'>Exclusive Videos</h1>
                        <div className='imdb-originals'>
                            <h3 className='title2'><FaGripLinesVertical className='react-icon' />IMDb Originals</h3>
                            <p className='p-tag1'>Celebrity interviews, trending entertainment stories, and expert analysis</p>
                        </div>
                        <div className='interviews'>
                        <div className='main-interviews1'>
                            <img className='editors-img' src="https://i.ibb.co/cQf3NGH/maxresdefault4.jpg" alt="maxresdefault4" border="0"/>   
                        </div>
                        
                        <div className='main-interviews2'>
                        <img className='editors-img' src="https://i.ibb.co/Jz7fvxS/maxresdefault1.jpg" alt="maxresdefault1" border="0/"/>
                        </div>
                        <div className='main-interviews3'>
                        <img className='editors-img' src="https://i.ibb.co/mvMtvqk/Anne-Hathaway-Matthew-Mc-Conaughey-Jessica-Chastain-Intersteller-interview.jpg" alt="Anne-Hathaway-Matthew-Mc-Conaughey-Jessica-Chastain-Intersteller-interview" border="0"/>  
                        </div>
                        </div>
                        <div className='total-ads'>
                        <div className='para-tags'>
                        <ModalVideo className='modal-video' channel='youtube' autoplay isOpen={isOpen} videoId="m7zrrj-nD8s" onClose={() => setOpen(false)} />

            <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle4' /></button>
                <p className='p-tag'>The cast of Once Upon a Time... In Hollywood</p>
                </div>
                <div className='ads-title3'>
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="qVN2Vd0XxzE" onClose={() => setOpen(false)} /> */}

                        <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle4' /></button>
                <p className='p-tag'>An interview with the cast of Justice League</p>
                        </div>
                        <div className='ads-title2'>
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="1b1ibbFGPSE" onClose={() => setOpen(false)} /> */}

                        <button className="play-button1" onClick={()=> setOpen(true)}><BiPlayCircle className='play-circle4' /></button>
                <p className='p-tag'>The stars of Interstellar speak</p>
                        </div>
                        </div>
                    </div>

                    <div className='streaming'>
                       <h1 className='title1'>Explore what is streaming</h1>
                       <div className='streaming-tags'>
                           <a href="ww" className='streaming-li1'>IMDb TV</a>
                           <a href="ww" className='streaming-li1'>PRIME VIDEO</a>
                           <a href="ww" className='streaming-li1'>NETFLIX</a>
                           <a href="ww" className='streaming-li1'>APPLE TV+</a>
                           <a href="ww" className='streaming-li1'>HULU</a>
                           <a href="ww" className='streaming-li1'>HBO</a>
                           <a href="ww" className='streaming-li1'>STARZ</a>
                           <a href="#ww" className='streaming-li1'>SHOWTIME</a>
                        </div>
                        <div className='film-list'>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1'src="https://i.ibb.co/StkPmQd/MV5-BY2-Qw-Ym-Fm-ZTEt-Nz-Y2-Mi00-ZWMy-LWEw-Y2-Yt-MGIy-NGZj-MWEx-OWEy-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Uw-Nzk.jpg" alt="MV5-BY2-Qw-Ym-Fm-ZTEt-Nz-Y2-Mi00-ZWMy-LWEw-Y2-Yt-MGIy-NGZj-MWEx-OWEy-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-Uw-Nzk" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆7.6
                            </div>
                            <div className='film-name'>
                                Predator
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1' src="https://i.ibb.co/QJzDVQ7/MV5-BMjhi-Mzgx-ZTct-NDc1-Ni00-OTIx-LTlh-MTYt-ZTA3-ZWFk-ODRk-Nm-E2-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj-Q5-N.jpg" alt="MV5-BMjhi-Mzgx-ZTct-NDc1-Ni00-OTIx-LTlh-MTYt-ZTA3-ZWFk-ODRk-Nm-E2-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj-Q5-N" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆9.5
                            </div>
                            <div className='film-name'>
                                Breaking Bad
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1' src="https://i.ibb.co/vCNCwJn/MV5-BMj-A5-Njk3-Mj-M4-OV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-MTc5-MTE1-MQ-V1.jpg" alt="MV5-BMj-A5-Njk3-Mj-M4-OV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-MTc5-MTE1-MQ-V1" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.1
                            </div>
                            <div className='film-name'>
                                No Country For Old Men
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1' src="https://i.ibb.co/YtcbHgg/MV5-BNGNh-MDIz-ZTUt-NTBl-Zi00-MTRl-LWFj-M2-It-Yz-Vi-Mj-E3-Yz-I5-Mjlj-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj-Q.jpg" alt="MV5-BNGNh-MDIz-ZTUt-NTBl-Zi00-MTRl-LWFj-M2-It-Yz-Vi-Mj-E3-Yz-I5-Mjlj-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj-Q" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.9
                            </div>
                            <div className='film-name'>
                                Pulp Fiction
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1' src="https://i.ibb.co/VLdZ4yd/MV5-BNDJh-YTk2-MTct-Zm-Vm-OS00-OTVi-LTgx-Nj-Qt-Mz-Qx-OTRi-MDdm-NGRj-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-ODk2.jpg" alt="MV5-BNDJh-YTk2-MTct-Zm-Vm-OS00-OTVi-LTgx-Nj-Qt-Mz-Qx-OTRi-MDdm-NGRj-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-ODk2-" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.1
                            </div>
                            <div className='film-name'>
                                The Handmaiden
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>

                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                            <img className='poster1' src="https://i.ibb.co/CJSK1yD/MV5-BMj-Ix-Mjgx-NTk0-MF5-BMl5-Ban-Bn-Xk-Ft-ZTgw-Nj-Iy-OTg2-MDE-V1.jpg" alt="MV5-BMj-Ix-Mjgx-NTk0-MF5-BMl5-Ban-Bn-Xk-Ft-ZTgw-Nj-Iy-OTg2-MDE-V1" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.2
                            </div>
                            <div className='film-name'>
                                The Wolf of Wall Street
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>
                    </div>
 
                    </div>

                    <div className='explore-tv'>
                    <div className='tvshows'>
                    

                        <h1 className='title1'>Explore TV shows</h1>
                        <h1 className='title2'><FaGripLinesVertical className='react-icon' />On Tv ➤</h1>
                        <p className='p-tag1'>This week's top TV shows</p>
                    </div>
                        <TvShows />
                    </div>

                    
                    
                    <div className='trailers-div'>
                        <Trailers /> 
                    </div>
                    


                    <div className='exclusive-videos'>
                        <h1 className='title1'>More to Explore</h1>
                        <div className='imdb-originals'>
                            <h3 className='title2'><FaGripLinesVertical className='react-icon' />Editors picks ➤</h3>
                    
                        </div>
                        <div className='interviews'>
                        <div className='main-interviews1'>
                            <img className='editors-img' src="https://i.ibb.co/bPQcKK3/MV5-BZm-Rl-Zm-Zk-MGEt-Mjcx-MC00-MWNm-LThh-MTQt-MTIz-OWVm-OWFj-Mj-Bh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2.jpg" alt="MV5-BZm-Rl-Zm-Zk-MGEt-Mjcx-MC00-MWNm-LThh-MTQt-MTIz-OWVm-OWFj-Mj-Bh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2" border="0"/>  
                        </div>
                        
                        <div className='main-interviews2'>
                        <img className='editors-img' src="https://i.ibb.co/7kQRTVL/MV5-BZDlm-Nj-Bi-Yz-Et-M2-Qz-Mi00-Yj-M1-LThm-NDEt-Yz-Ey-Mz-Y3-ZGQ3-ZTM2-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj.jpg" alt="MV5-BZDlm-Nj-Bi-Yz-Et-M2-Qz-Mi00-Yj-M1-LThm-NDEt-Yz-Ey-Mz-Y3-ZGQ3-ZTM2-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj" border="0"/> 
                        </div>
                        <div className='main-interviews3'>
                            <img className='editors-img' src="https://i.ibb.co/VSQgxxY/MV5-BNTUy-ZGMy-ZTIt-YWRj-Yy00-Zj-Ez-LWE2-YWUt-MTAx-MGQ1-NTNj-MTRj-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2-N.jpg" alt="MV5-BNTUy-ZGMy-ZTIt-YWRj-Yy00-Zj-Ez-LWE2-YWUt-MTAx-MGQ1-NTNj-MTRj-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2-N" border="0"/>
                        </div>
                        </div>
                        <div className='total-ads'>
                        <div className='para-tags'>
                            <div className='ads-title'>
                                <p className='p-tag'>The best TV and Movies to watch in April</p>

                            </div>
                            <div className='ads-title4'>

                                <p className='p-tag'>The best TV shows currently streaming</p>
                            </div>
                            <div className='ads-title5'>
                        <p className='p-tag'>Everything new on Disney+</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='celeb-title'>
                    <h3 className='title2'><FaGripLinesVertical className='react-icon' />Trending celebrities ➤</h3>
                            <p className='p-tag1'>Top trending celebrities today</p>
                            
                    <div className='celebrities-div'>
                        <div className='img-holder'>
                        
                        <div className='celeb-img3'>
                            <img className='celeb-img2'src="https://i.ibb.co/BZ1PZ3L/leonardo-dicaprio.jpg" alt="leonardo-dicaprio" border="0"/>
                            <p className='p-tag'>Leonardo DiCaprio</p>
                        </div>
                        
                            
                        <div className='celeb-img'>
                        <img className='celeb-img1' src="https://i.ibb.co/0YSj2dV/3393.jpg" alt="3393" border="0"/>
                        <p className='p-tag'>Natalie Portman</p>
                        </div>
                        <div className='celeb-img3'>
                            <img className='celeb-img2' src="https://i.ibb.co/vvCd6kb/MV5-BMTgx-NDcw-Mz-U2-Nl5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NDc4-Nzkz-OQ-V1.jpg" alt="MV5-BMTgx-NDcw-Mz-U2-Nl5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NDc4-Nzkz-OQ-V1" border="0"/>
                            <p className='p-tag'>Margot Robbie</p>
                        </div>
                        <div className='celeb-img'>
                            <img className='celeb-img1' src="https://i.ibb.co/RvydQyC/2002.jpg" alt="2002" border="0"/>
                            <p className='p-tag'>Matthew Mcconaughey</p>
                        </div>
                        <div className='celeb-img'>
                        <img className='celeb-img1' src="https://i.ibb.co/bWskVnw/brad-pitt-attends-the-premiere-of-20th-century-foxs-ad-news-photo-1580754081.jpg" alt="the-premiere-of-2" border="0"/>
                        <p className='p-tag'>Brad Pitt</p>
                        </div>
                        <div className='celeb-img'>
                        <img className='celeb-img2'src="https://i.ibb.co/LdgjF7b/5aadf505-be8d-4023-bc1d-045a237b96b3.jpg" alt="5aadf505-be8d-4023-bc1d-045a237b96b3" border="0"/>
                        <p className='p-tag'>Mila Kunis</p>
                        </div>
                        {/* <div className='celeb-img'>
                        <img className='celeb-img1' src="https://i.ibb.co/bWskVnw/brad-pitt-attends-the-premiere-of-20th-century-foxs-ad-news-photo-1580754081.jpg" alt="brad-pitt-attends-the-premiere-of-20th-century-foxs-ad-news-photo-1580754081" border="0"/>
                        <p className='p-tag'>Brad Pitt</p>
                        </div>
                        <div className='celeb-img'>
                        <img className='celeb-img2'src="https://i.ibb.co/LdgjF7b/5aadf505-be8d-4023-bc1d-045a237b96b3.jpg" alt="5aadf505-be8d-4023-bc1d-045a237b96b3" border="0"/>
                        <p className='p-tag'>Mila Kunis</p>
                        </div> */}
                    
                        
                        </div>

                    <div className='celeb-name'>
                        
                        
                        
                        
                        
                        
                    </div>

                    </div>
                    </div>

                    
                    <div>
                      
                        <News />
                        
                       
                    
                        
                    </div>
                    <div className='article-buttons'>
                            <button className='art-but'>Top News</button>
                            <button className='art-but'>Movie News</button>
                            <button className='art-but'>TV News</button>
                            <button className='art-but'>Celebrity News</button>
                            
                        </div>

                        
                        
                        
                             

                                
                            
                        



                    
                    
                    
                    



                    

             </div>
    )
}

export default Home
