import './Search.css'
import {useRef} from 'react'
import search from '../images/search.svg'
import close from '../images/close.svg'

const Search = ({form, topic, rating})=>{
    let isActive
    const dropDown = useRef(null)

    const handleClickDropDown = (e)=>{
        isActive = (isActive) ? false : true
        dropDown.current.classList.toggle('isActive')          
        form.current.classList.toggle('formActive')
    }

    return <>
            <form ref={form} className="header__form" action="get">
                <input ref={topic} type="text" placeholder="Start finding your favourite gifs!"/>
                    <select alt="rating" ref={rating}>
                            <option value="g">g</option>
                            <option value="pg">pg</option>
                            <option value="pg-13">pg-13</option>
                            <option value="r">r</option>
                    </select>
                    <div ref={dropDown} onClick={handleClickDropDown} className="dropDown" ></div>
                    <div className="closeDropDown"></div>
                    <button className="search" ><img src={search} /></button>
                </form>
            <img src={close} onClick={handleClickDropDown} className="closeForm" />
            </>
            
}

export default Search