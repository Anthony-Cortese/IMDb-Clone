import React from 'react'
import './SignIn.css'
import {SiImdb } from 'react-icons/si'
import {AiFillAmazonSquare} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {GrApple} from 'react-icons/gr'

function SignIn() {
    
    return (
        <div className='main-div1'>
            <div className='signin-div'>
                
                <div className='sign-buttons'>
                   <h1 className='header'>Sign in</h1> 
                    <div className='imdb-button'><button className='buttons'><SiImdb className='imdb-icon' /><span>Sign In with IMDb</span></button></div>
                    <div className='imdb-button'><button className='buttons'><AiFillAmazonSquare className='amazon' />Sign In with Amazon</button></div>
                    <div className='imdb-button'><button className='buttons'><FaFacebook className='facebook' />Sign In with Facebook</button></div>
                    <div className='imdb-button'><button className='buttons'><FcGoogle className='google' />Sign In with Google</button></div>
                    <div className='imdb-button'><button className='buttons'><GrApple className='apple' />Sign In with Apple</button></div>
                       <div className='or'>or</div> <div className='line2'></div><div className='line3'></div>
                            
                        
                    <button className='create'>Create a New Account</button>
                    <p className='conditions'>By signing in, you agree to IMDb's Conditions</p>
                    <p className='use'>of Use and Privacy Policy.</p>
                </div>
            </div>
            
            <div className='imdb-info'>
                <h1>Benefits of your free IMDb Account</h1>
                <p><strong>Personalized Recommendations</strong></p>
                <p>Discover shows you'll love.</p>
                <p><strong>Your Watchlist</strong></p>
                <p>Track everything you want to watch and receive e-mail when movies open in theatres.</p>
                <p><strong>Your Ratings</strong></p>
                <p>Rate and remember everything you've seen</p>
                <p><strong>Contribute to IMDb</strong></p>
                <p>Add data that will be seen by millions of people and get cool badges.</p>

            
            </div>    

            
            
        </div>
    )
}

export default SignIn
