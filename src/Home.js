import React from 'react'
import {Link} from 'react-router-dom'
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



function Home() {
    
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
                              <Link to='/Sean'> <BiPlayCircle className='play-circle' /> </Link>
                                    <span className='p-tag'>"Sean Cortese"</span>
                                    <span className='p-tag1'>Watch his new monologue</span>
                                </div>
                
                                    
                                
                            </div>
                            <div className='trailer2'>
                            <div className='trailer-img'>
                                    
                                    </div>
                                    <div className='trailer-title'>
                                        <BiPlayCircle className='play-circle' />
                                        <span className='p-tag'>"Movie Name"</span>
                                        <span className='p-tag1'>Watch the New Trailer</span>
                                    </div>

                            </div>
                            <div className='trailer3'>
                            <div className='trailer-img'>
                                    
                                    </div>
                                    <div className='trailer-title'>
                                        <BiPlayCircle className='play-circle' />
                                        <span className='p-tag'>"Movie Name"</span>
                                        <span className='p-tag1'>Watch the New Trailer</span>
                                    </div>

                            </div>
                            <a className='browse' href='#' >Browse Trailers  ➤</a>
                    </div>
            </div>
            
            
            
            
            
            <div className='featured-div'>
                
                <div className='featured'>
                    <h3 className='title1'>Featured Today</h3>
                        <div className='lists-div'>
                            
                            <div className='list'>
                            <img className='featured-img' src="https://i.ibb.co/3p653Rh/maxresdefault.jpg" alt="maxresdefault" border="0"/>
                            </div>
                            
                            <div className='list'>
                            <img  className='featured-img' src="https://i.ibb.co/dj0GM9H/Screen-Shot-2018-11-30-at-12-58-42-PM.webp" alt="Screen-Shot-2018-11-30-at-12-58-42-PM" border="0"/>
                            </div>
                        </div>
                    
                    
                        <div className='ads-title'>
                            <p className='p-tag'>Leonardo DiCaprio roles through the years</p>
                            <p className='p-tag'>Natalie Portman through the years</p>
                        </div>
                </div>
                    
                    <div className='ads'>
                    </div>
            </div>

                    <div className='what-watch'>
                        <h3 className='title1'>What to watch</h3>
                        <h6 className='get-more'>Get more recommendations ➤</h6>
                    </div>

                    <div className='from-watchlist'>
                        <h1 className='title2'><FaGripLinesVertical className='react-icon' /> From your WatchList ➤</h1>
                    </div>

                    <div className='watchlist-div'>
                        <div className='watch-list'>
                            <BiBookmarkPlus className='watchlist-icon' />
                            <p className='p-tag'><strong>Sign in to access your Watchlist</strong></p>
                            <p className='p-tag'>Save shows and movies to keep track of what you want to watch.</p>
                            <button onClick="href='./SignIn'"className='regular-button'>Sign in to IMDb</button>
                        </div>
                    </div>
                        
                    <div className='fan-favorites'>
                        <h1 className='title2'><FaGripLinesVertical className='react-icon' />Fan Favorites ➤</h1>
                        <p className='p-tag1'>This week's top TV and movies</p>
                    </div>

                    <div className='film-list'>
                        <FanFavorites />
                    </div>
                        
                    


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
                            
                        </div>
                        
                        <div className='main-interviews2'>
                            
                        </div>
                        <div className='main-interviews3'>
                            
                        </div>
                        </div>
                        <div className='para-tags'>
                        <p className='p-tag'>this is a test</p>
                        <p className='p-tag'>this is a test</p>
                        <p className='p-tag'>this is a test</p>
                        </div>
                    </div>

                    <div className='streaming'>
                       <h1 className='title1'>Explore what is streaming</h1>
                       <div className='streaming-tags'>
                           <a href="#" className='streaming-li1'>IMDb TV</a>
                           <a href="#" className='streaming-li1'>PRIME VIDEO</a>
                           <a href="#" className='streaming-li1'>NETFLIX</a>
                           <a href="#" className='streaming-li1'>APPLE TV+</a>
                           <a href="#" className='streaming-li1'>HULU</a>
                           <a href="#" className='streaming-li1'>HBO</a>
                           <a href="#" className='streaming-li1'>STARZ</a>
                           <a href="#" className='streaming-li1'>SHOWTIME</a>
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

                    
                    

                    <Trailers />
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
                        <div className='para-tags'>
                        <p className='p-tag'>The best TV and Movies to watch in April</p>
                        <p className='p-tag'>The best TV shows currently streaming</p>
                        <p className='p-tag'>Everything new on Disney+</p>
                        </div>
                    </div>
                    <div className='celeb-title'>
                    <h3 className='title2'><FaGripLinesVertical className='react-icon' />Trending celebrities ➤</h3>
                            <p className='p-tag1'>Top trending celebrities today</p>
                            
                    <div className='celebrities-div'>
                        <div className='img-holder'>
                        <div className='celeb-img'>
                            <img className='celeb-img1' src="https://i.ibb.co/C9KJb3q/435-v9-bc.jpg" alt="435-v9-bc" border="0"/>
                        </div>
                            
                        <div className='celeb-img'>
                        <img className='celeb-img1' src="https://i.ibb.co/G9bwwJ2/MV5-BMTQ3-ODE3-Mjg1-NV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Nz-A4-ODcx-NA-V1.jpg" alt="MV5-BMTQ3-ODE3-Mjg1-NV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Nz-A4-ODcx-NA-V1" border="0"/>
                        </div>
                        <div className='celeb-img'>
                            <img className='celeb-img1' src="https://i.ibb.co/vvCd6kb/MV5-BMTgx-NDcw-Mz-U2-Nl5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NDc4-Nzkz-OQ-V1.jpg" alt="MV5-BMTgx-NDcw-Mz-U2-Nl5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NDc4-Nzkz-OQ-V1" border="0"/>
                        </div>
                        <div className='celeb-img'>
                            <img className='celeb-img1' src="https://i.ibb.co/RvydQyC/2002.jpg" alt="2002" border="0"/>
                        </div>
                        <div className='celeb-img'>
                        <img className='celeb-img1' src="https://i.ibb.co/bWskVnw/brad-pitt-attends-the-premiere-of-20th-century-foxs-ad-news-photo-1580754081.jpg" alt="brad-pitt-attends-the-premiere-of-20th-century-foxs-ad-news-photo-1580754081" border="0"/>
                        </div>
                        <div className='celeb-img'>
                        <img className='celeb-img1'src="https://i.ibb.co/94JnTXP/Mila-Kunis-1.jpg" alt="Mila-Kunis-1" border="0"/>
                        </div>
                        </div>

                    <div className='celeb-name'>
                        <p className='p-tag'>Leonardo DiCaprio</p>
                        <p className='p-tag'>Natalie Portman</p>
                        <p className='p-tag'>Margot Robbie</p>
                        <p className='p-tag'>Matthew Mcconaughey</p>
                        <p className='p-tag'>Brad Pitt</p>
                        <p className='p-tag'>Mila Kunis</p>
                    </div>

                    </div>
                    </div>

                    <div className='top'>
                    <h3 className='title2'><FaGripLinesVertical className='react-icon' />Top News ➤</h3>
                    </div>
                    <div className='top-news'>
                        <div className='news-article'>
                            <div className='article-img'>
                                <img className='article-img1' src="https://i.ibb.co/2tcMGsg/hbz-leonardio-dicaprio-camila-morrone-lead-1581301807.jpg" alt="hbz-leonardio-dicaprio-camila-morrone-lead-1581301807" border="0"/>
                            </div>
                            <div className='article-info'>
                                <h5 className='p-tag'>Leonardo DiCaprio and Camila Morrone soak up the sun in Malibu</h5>
                                <h6 className='p-tag'>March 29, 2021</h6>
                            </div>
                        </div>
                        <div className='news-article'>
                            <div className='article-img'>
                            <img className='article-img1' src="https://i.ibb.co/n6zhcSP/c0-Cqa-4t-400x400.jpg" alt="c0-Cqa-4t-400x400" border="0"/>
                            </div>
                            <div className='article-info'>
                                <h5 className='p-tag'>Margot Robbie Pregnancy Rumors Debunked</h5>
                                <h6 className='p-tag'>April 11, 2021</h6>
                            </div>
                        </div>
                        <div className='news-article'>
                            <div className='article-img'>
                            <img className='article-img1' src="https://i.ibb.co/85bf4pf/Moby-and-Natalie-Portman-696x442.jpg" alt="Moby-and-Natalie-Portman-696x442" border="0"/>
                            </div>
                            <div className='article-info'>
                                <h5 className='p-tag'>Moby discusses Natalie Portman dating controversy, says it became hard to ignore</h5>
                                <h6 className='p-tag'>April 12, 2021</h6>
                            </div>
                        </div>
                    
                        
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
