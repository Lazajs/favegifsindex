import './Search.css'
import {useRef, useState} from 'react'
import search from '../images/search.svg'
import close from '../images/close.svg'

const Search = ({form, topic, rating})=>{
    let [isActive, setActive] = useState(false)
    const dropDown = useRef(null)

    if (isActive) return  (<>
            <form ref={form} className="header__form" action="get">
                <input ref={topic} type="text" placeholder="Start finding your favourite gifs!"/>
                    <select alt="rating" ref={rating}>
                            <option value="g">g</option>
                            <option value="pg">pg</option>
                            <option value="pg-13">pg-13</option>
                            <option value="r">r</option>
                    </select>
                    <div ref={dropDown} onClick={()=> setActive(isActive ? false : true)} className="dropDown" ></div>
                    <div className="closeDropDown"></div>
                    <button className="search" ><img src={search} /></button>
                </form>
            <img src={close} onClick={()=> setActive(isActive ? false : true)} className="search-or-close" />
        </>)

    else return (
        <img className="search-or-close" src={search} onClick={() => setActive(isActive ? false : true)} />
    )
}

export default Search