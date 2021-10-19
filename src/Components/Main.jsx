import { useEffect, useState } from 'react';
import './Main.css'
import getGifs from './services/getGifs';
import Gif from './Gif'

const Main = ({topics, rating})=>{
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }

    const [gifURL, setGifURL] = useState(null)

    useEffect(()=>{
        getGifs(topics, rating, 10).then(url => setGifURL(url))
    },[topics,rating])


    if(gifURL) {
        return (
        <>
            <main className="container">
                {
                    gifURL.map(singleGif => <Gif url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
        </>
        )
    }
    else {
        return (
            <h1>Insert a topic!</h1>
        )
    } 
}

export default Main;