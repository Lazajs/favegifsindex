import React, {useRef, useEffect} from 'react'
import './Gif.css'


const Gif = ({url, title, width, height})=>{
    return  <div  className="gif-container">
                <img loading="lazy" alt={title} className="gif-img" src={url} />
                <p>{title}</p>
            </div>
}

export default Gif;