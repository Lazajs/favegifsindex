import React, {useState, useEffect} from 'react'
import './Gif.scss'


const Gif = ({url, title})=>{
    // const [clicked, setClicked] = useState(false)
    return  <div  className="gif-container">
                <img onError={()=> <h2> Sorry, there was a problem loading the gif :(</h2>} loading="lazy" alt={title} className="gif-img" src={url} />
                <p>{title}</p>
            </div>
}

export default Gif;