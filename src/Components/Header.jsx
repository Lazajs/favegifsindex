import './Header.css'
import {useRef, useEffect} from 'react'
import search from '../images/search.svg'
import close from '../images/close.svg'

const Header = ({topic, rating, form})=>{
    let isActive
    const dropDown = useRef(null)

    const handleClickDropDown = (e)=>{
        isActive = (isActive) ? false : true
        dropDown.current.classList.toggle('isActive')          
        form.current.classList.toggle('formActive')
    }

 
    return ( 
        <>
            <header className="header shadows">
                <div className="header__text">
                    <h1 className="header__heading">faveGifs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare tempus dapibus.</p>
                </div>
            </header>

            
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
    )
}

export default Header