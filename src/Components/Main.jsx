import { useContext, useEffect, useState } from 'react';
import './Main.css'
import getGifs from './services/getGifs';
import Gif from './Gif'
import Pages from './Pages'
import GifsContext from '../context/GifsContext';
import Loading from './Loading';

const Main = ()=>{
    const [isFound, setAdvice] = useState(true)
    const [gifURL, setGifURL] = useState(null)
    const {data} = useContext(GifsContext)

    const assignState = (url)=>{
        setGifURL(url)
        setAdvice(true)
    }

    useEffect(()=>{
        getGifs(data.topic, data.rating, data.count, data.offset).then(urls => urls ? assignState(urls) : setAdvice(false))   
    },[data])
    
    return (
        (gifURL) ? 
        <>
            {isFound ? '' : <h2 className="advice">No more gifs found</h2>}
            <main className="container">
                {
                    gifURL.map(singleGif => <Gif url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
            <Pages status={isFound} />
        </>
               : <Loading/>)
}

export default Main;