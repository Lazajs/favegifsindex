import React, { useEffect, useState } from 'react';
import './usingHooks.css'




const UsingTheHooks = () => {
    const [gifURL, setGifs] = useState(false)

    const API_KEY = 'https://api.giphy.com/v1/gifs/search?api_key=O9cAnmn23tqC7ImqbJ0J8jUsvW7DJpkV&q=panda&limit=10&offset=0&rating=g&lang=en'

    useEffect( ()=> {
        fetch(API_KEY)
            .then(res => res.json())
            .then(res => {
                const {data} = res
                const gifs = data.map(img => img.images.downsized.url)
                setGifs(gifs)
    })},[])


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

export default UsingTheHooks

