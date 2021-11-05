import './Search.scss'
import {useContext, useRef, useState} from 'react'
import search from '../images/search.svg'   
import close from '../images/close.svg'
import GifsContext from '../context/GifsContext'

const Search = ()=>{
    let [isActive, setActive] = useState(false)
    const {data, setData} = useContext(GifsContext)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (e.target[0].value !== '') {
            if (data.topic !== e.target[0].value) {
                setData({count:24, offset: 0, topic: e.target[0].value, rating: e.target[1].value})
            } else if (data.rating !== e.target[1].value) {
                setData({count:24, offset: 0, topic: e.target[0].value, rating: e.target[1].value, src: 'search'})
            }
        }
    }

   return (
        <>
        <img src={isActive ? close : search} onClick={()=> setActive(isActive ? false : true)} className={isActive ? 'search-or-close action' : 'search-or-close'} />
        <form onSubmit={handleSubmit} className={isActive ? 'header__form action' : 'header__form'} action="get">
        <input type="text" placeholder="Start finding your favourite gifs!"/>
            <select alt="rating">
                    <option value="g">g</option>
                    <option value="pg">pg</option>
                    <option value="pg-13">pg-13</option>
                    <option value="r">r</option>
            </select>
            <button onClick={()=> setActive(isActive ? false : true)} className="search" >Find</button>
        </form>   
    </>
   )
}

export default Search