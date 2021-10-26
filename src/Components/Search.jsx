import './Search.css'
import {useContext, useState} from 'react'
import search from '../images/search.svg'
import close from '../images/close.svg'
import Device from '../context/DeviceContext'
import DesktopSearch from './DesktopSearch'

const Search = ({form, topic, rating})=>{
    let [isActive, setActive] = useState(false)
    const {context, isMobile} = useContext(Device) //will be true if the client is on mobile, will be false either way

    if (context) {return (
        <>
        <img src={isActive ? close : search} onClick={()=> setActive(isActive ? false : true)} className={isActive ? 'search-or-close action' : 'search-or-close'} />
        <form ref={form} className={isActive ? 'header__form action' : 'header__form'} action="get">
        <input ref={topic} type="text" placeholder="Start finding your favourite gifs!"/>
            <select alt="rating" ref={rating}>
                    <option value="g">g</option>
                    <option value="pg">pg</option>
                    <option value="pg-13">pg-13</option>
                    <option value="r">r</option>
            </select>
            <button onClick={()=> setActive(isActive ? false : true)} className="search" >Find</button>
        </form>   
    </>
    )} else return <DesktopSearch form={form} rating={rating} topic={topic} />
}

export default Search