import './Header.css'
import {useState, useEffect} from 'react'

const Header = ({topic, rating, form})=>{
    return ( 
        <>
            <header className="header shadows">
                <div className="header__text">
                    <h1 className="header__heading">faveGifs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare tempus dapibus. Aliquam imperdiet enim sit amet mauris pretium, nec porta arcu egestas. Sed tellus turpis, aliquam et urna congue, ullamcorper scelerisque eros.</p>
                </div>
            </header>
            <form ref={form} className="header__form" action="get">
                <input ref={topic} type="text" placeholder="Start finding your favourite gifs by typing a topic!"/>
                    <select alt="rating" ref={rating}>
                            <option value="g">g</option>
                            <option value="pg">pg</option>
                            <option value="pg-13">pg-13</option>
                            <option value="r">r</option>
                    </select>
                    <input type="submit" className="search" value=" "/>
                </form>
        </>
    )
}

export default Header