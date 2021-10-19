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
        getGifs(topics, rating, 2).then(url => setGifURL(url))
    },[topics,rating])


    const otherGif = (entries)=>{
        if (entries[0].isIntersecting) {
            const copyState = gifURL.map(url => url)

            getGifs(topics, rating, gifURL.length + 1).then(url => {
                const lastNumber = url.length - 1
                copyState.push(url[lastNumber])
                setGifURL(copyState)
                console.log(gifURL)              
            })
        }
    }

    const observer = new IntersectionObserver(otherGif, options)



    if(gifURL) {
        return (
        <>
            <main className="container">
                {
                    gifURL.map(singleGif => <Gif observer={observer} url={singleGif} />)
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