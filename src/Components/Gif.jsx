import React, {useRef, useEffect} from 'react'
import './Gif.css'


const Gif = ({url, title})=>{

    return  <div className="gif-container">
                <img alt={title} title={title} className="gif-img" src={url} />
            </div>
}

export default Gif;