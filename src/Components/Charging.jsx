import './Charging.css'
import {useRef, useEffect} from 'react'

const Charging = (props)=>{
    const sprite = useRef(null)
    let cnt = 0
    let interval

    const makeSprite = ()=>{
        interval = setInterval(()=>{
            if (cnt === 0){
                sprite.current.style.backgroundPosition = '0 0'
                cnt++
            } else if (cnt === 1) {
                sprite.current.style.backgroundPosition = '-320px 0'
                cnt++
            } else if (cnt === 2) {
                sprite.current.style.backgroundPosition = '-640px 0'
                cnt = 0
            }
        },75)
    }

    useEffect(()=>{
        makeSprite()   
        return ()=>{
            clearInterval(interval)
        }
    },[])



    return  <div className="sprite-container">
                <div ref={sprite} className="charging-sprite"></div>
            </div>
}

export default Charging