import { useContext, useEffect, useState } from 'react';
import './Main.css'
import getGifs from './services/getGifs';
import Gif from './Gif'
import Pages from './Pages'
import GifsContext from '../context/GifsContext';
import Loading from './Loading';
const Main = ({topics, rating})=>{
    const [gifURL, setGifURL] = useState(null)
    const {data} = useContext(GifsContext)

    useEffect(()=>{
        if(topics) getGifs(topics, rating, data.count, data.offset).then(url => setGifURL(url))
    },[topics,rating, data])
    
    
    return (
        (gifURL) ? 
        <>
            <main className="container">
                {
                    gifURL.map(singleGif => <Gif width={singleGif.width} height={singleGif.height} url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
            <Pages />
        </>
               : <Loading/>)
}

export default Main;