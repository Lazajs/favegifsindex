import React, {useState } from 'react'
import './Gif.scss'


const Gif = ({url, title})=>{
    const [load, setLoad] = useState(false)
    return  <div  className="gif-container">
                <img onLoad={()=> setLoad(true)} onError={()=> <h2> Sorry, there was a problem loading the gif :(</h2>} alt={title} className="gif-img" src={url} />
                {load ? <p>{title}</p>:""}
            </div>
}

export default Gif;