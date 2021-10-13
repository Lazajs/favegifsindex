import React, { useEffect, useState } from 'react';
import './usingHooks.css'
import getGifs from './services/getGifs';



const Gifs = () => {
    const [gifURL, setGifs] = useState(false)

    useEffect( ()=> {
        getGifs('monkey', 10, 'g').then(res => setGifs(res))
    },[])

    if(gifURL) {
        return (
            <div className='container'>
            {
                gifURL.map(singleGif => <img src={singleGif} />)
            }
            </div>
        )
    }
    
    else {
        return <h1>Waiting for it..</h1>
    }
}

export default Gifs

