import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css'
import './FanFavorites.css'
import {GoBookmark} from 'react-icons/go'
import {FaGripLinesVertical} from 'react-icons/fa'
function FanFavorites() {
    
    const data = [
        {poster: "https://i.ibb.co/QbRvjgN/MV5-BYj-I3-NDg0-ZTEt-MDEw-YS00-YWMy-LThj-Yjkt-MTNl-M2-Nm-Yjc1-OGRi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2.jpg",
        rating: 8.2,
        name: "Zach Snyder's Justice League"},

        {poster: "https://i.ibb.co/PN9PxJy/u-g-F9-JL6-E0.jpg",
        rating: 7.6,
        name: 'Once Upon a Time... In Hollywood'}
    ] 
    
    
    return ( 
                
                <div className='film-list'>
                        <div className='all-info'>
                        <GoBookmark className='watchlist-icon2' />
                            <div className='movie-poster'>
                                
                                <img className='poster1' src="https://i.ibb.co/QbRvjgN/MV5-BYj-I3-NDg0-ZTEt-MDEw-YS00-YWMy-LThj-Yjkt-MTNl-M2-Nm-Yjc1-OGRi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2.jpg" alt="MV5-BYj-I3-NDg0-ZTEt-MDEw-YS00-YWMy-LThj-Yjkt-MTNl-M2-Nm-Yjc1-OGRi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEy-Mj-M2-" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.2
                            </div>
                            <div className='film-name'>
                                Zack Snyder's Justice League
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
                            
                                <img className='poster1' src="https://i.ibb.co/PN9PxJy/u-g-F9-JL6-E0.jpg" alt='hollywood' />
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆7.6
                            </div>
                            <div className='film-name'>
                                Once Upon a Time... In Hollywood
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
                            
                            <img className='poster1' src="https://i.ibb.co/42cbCYN/MV5-BYzg0-NGM2-Nj-At-Nm-Ix-OC00-MDJm-LTg5-Zm-Yt-Yz-M0-MTE4-NWE2-Nzlh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTA4-Nj-E.jpg" alt="MV5-BYzg0-NGM2-Nj-At-Nm-Ix-OC00-MDJm-LTg5-Zm-Yt-Yz-M0-MTE4-NWE2-Nzlh-Xk-Ey-Xk-Fqc-Gde-QXVy-MTA4-Nj-E" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆7.5
                            </div>
                            <div className='film-name'>
                                Tenet
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
                            
                            <img className='poster1' src="https://i.ibb.co/D8kc99W/MV5-BMz-Y1-Zj-Mw-MGEt-YTY1-ZS00-ZDll-LTk0-Zm-Ut-Yz-A3-ZTA4-Nm-Yw-NGNk-Xk-Ey-Xk-Fqc-Gde-QXVy-NDk3-Nz.jpg" alt="MV5-BMz-Y1-Zj-Mw-MGEt-YTY1-ZS00-ZDll-LTk0-Zm-Ut-Yz-A3-ZTA4-Nm-Yw-NGNk-Xk-Ey-Xk-Fqc-Gde-QXVy-NDk3-Nz-" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆7.9
                            </div>
                            <div className='film-name'>
                                Almost Famous
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
                            
                            <img className='poster1'src="https://i.ibb.co/TkvF1g6/MV5-BNDUx-N2-I5-NDUt-Zjdl-MC00-Njlm-LTg0-OTQt-Njk0-Nj-Ax-Zj-Fm-ZTUz-Xk-Ey-Xk-Fqc-Gde-QXVy-MTQx-Nz-Mz.jpg" alt="MV5-BNDUx-N2-I5-NDUt-Zjdl-MC00-Njlm-LTg0-OTQt-Njk0-Nj-Ax-Zj-Fm-ZTUz-Xk-Ey-Xk-Fqc-Gde-QXVy-MTQx-Nz-Mz" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆7.9
                            </div>
                            <div className='film-name'>
                                Edward Scissorhands
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
                            
                            <img className='poster1'src="https://i.ibb.co/Y0FYwp4/MV5-BMm-Q2-Mm-U3-Nzkt-Zj-Ax-OC00-ZDZh-LTk4-Yz-Et-MDMy-Mzcx-Y2-Iw-MDAy-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj.jpg" alt="MV5-BMm-Q2-Mm-U3-Nzkt-Zj-Ax-OC00-ZDZh-LTk4-Yz-Et-MDMy-Mzcx-Y2-Iw-MDAy-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzkw-Mj-" border="0"/>
                            </div>
                        <div className='film-info'>
                            <div className='rating'>
                                ☆8.4
                            </div>
                            <div className='film-name'>
                                Alien
                            </div>
                            <div className='options'>
                                <button className='watch-button'>Watch Options</button>
                                <button className='watch-button1'>▶︎ Trailer</button>
                            </div>
                        </div>
                        </div>
                    </div>
 
           )
}

export default FanFavorites
