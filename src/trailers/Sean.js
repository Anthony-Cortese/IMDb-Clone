import React from 'react'
import ReactPlayer from 'react-player'
// import PlayerContaier from 'react-player'

function Sean() {
    return (
        <ReactPlayer
                    url='https://www.youtube.com/watch?v=dQaKtMkgP5I'
                    controls
                    // playbackRate = {2}
                    width = "896px"
                    height = "504px" 
                 />
    )
}

export default Sean
