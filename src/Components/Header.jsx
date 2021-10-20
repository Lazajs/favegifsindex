import './Header.css'
import {useState, useEffect} from 'react'

const Header = ({topic, rating, form})=>{
    return ( 
        <>
            <header className="header shadows">
                <h1 className="header__heading">faveGifs</h1>
                <form ref={form} className="header__form" action="get">
                    <input ref={topic} type="text" placeholder="Enter a topic"/>
                    <select alt="rating" ref={rating}> //.selectedOptions() array .selectedIndex()
                            <option value="g">g</option>
                            <option value="pg">pg</option>
                            <option value="pg-13">pg-13</option>
                            <option value="r">r</option>
                    </select>
                    <input type="submit" className="search" value=" "/>
                </form>
            </header>
        </>
    )
}

export default Header