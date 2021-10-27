import React, {useState, useEffect} from 'react'
import './Gif.css'


const Gif = ({url, title})=>{
    const [clicked, setClicked] = useState(false)

    const handleClick = (e)=>{

        if (e.target.src) {
            e.target.classList.toggle('click')
            setClicked(clicked ? !clicked : clicked)
        }
    }

    return  <div onClick={handleClick} className="gif-container">
                <img onError={()=> <h2> Sorry, there was a problem loading the gif :(</h2>} loading="lazy" alt={title} className="gif-img" src={url} />
                <p>{title}</p>
            </div>
}

export default Gif;