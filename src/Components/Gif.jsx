import React, {useRef, useEffect} from 'react'
import './Gif.css'


const Gif = ({observer, url})=>{
    const newToObserve = useRef(null)

    useEffect(()=> {
        observer.observe(newToObserve.current)
    },[url])

    return  <>
                <img ref={newToObserve} className="gif-img" src={url} />
            </>
}

export default Gif;