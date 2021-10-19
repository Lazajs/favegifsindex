import { useEffect, useState } from 'react';
import './Main.css'
import getGifs from './services/getGifs';
import Gif from './Gif'
import Charging from './Charging';

const Main = ({topics, rating})=>{
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }

    const [gifURL, setGifURL] = useState(null)

    useEffect(()=>{
        getGifs(topics, rating, 20).then(url => setGifURL(url))
    },[topics,rating])


    if(gifURL) {
        return (
        <>
            <main className="container">
                {
                    gifURL.map(singleGif => <Gif width={singleGif.width} height={singleGif.height} url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
        </>
        )
    }

    else {
        return <Charging />
    } 
}

export default Main;