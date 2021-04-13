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
