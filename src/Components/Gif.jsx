import {useState, useEffect, useRef} from 'react'
import useObserver from '../hooks/useObserver'
import './Gif.scss'


const Gif = ({url, title})=>{
    const [load, setLoad] = useState(false)
    const [el, setEl] = useState(null)
    const element = useRef() 

    useObserver(el,setLoad)

    useEffect(()=> setEl(element.current),[])


    return  <div ref={element}  className="gif-container"> 
    {load ?     
                <>
                    <img onError={()=> <h2> Sorry, there was a problem loading the gif :(</h2>} alt={title} className="gif-img" src={url} />
                    <p>{title}</p>
                </>
    : ""}
            </div>
}

export default Gif;