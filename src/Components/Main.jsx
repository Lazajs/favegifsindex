import { useEffect, useState } from 'react';
import './Main.css'
import getGifs from './services/getGifs';
import Gif from './Gif'
import Charging from './Charging';
import Pages from './Pages'

const Main = ({topics, rating})=>{
    const [gifURL, setGifURL] = useState(null)

    useEffect(()=>{
        if(topics) getGifs(topics, rating, 20).then(url => setGifURL(url))
    },[topics,rating])
    
    if(gifURL) {
        const gifContainer = gifURL.map(gif => gif)
        console.log(gifURL)
        return (
        <>
            <main className="container">
                {
                    gifContainer.map(singleGif => <Gif width={singleGif.width} height={singleGif.height} url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
            <Pages />
        </>
        )
    }

    else {
        return <Charging />
    } 
}

export default Main;