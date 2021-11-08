import './Search.scss'
import {useContext, useState} from 'react'
import search from '../images/search.svg'   
import close from '../images/close.svg'
import GifsContext from '../context/GifsContext'

const Search = ()=>{
    const {data, setData} = useContext(GifsContext)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (e.target[0].value !== '') {
            if (data.topic !== e.target[0].value) {
                setData({ topic: e.target[0].value, rating: e.target[1].value})
            } else if (data.rating !== e.target[1].value) {
                setData({ topic: e.target[0].value, rating: e.target[1].value})
            }
        }
    }

   return (
        <>   
        <form onSubmit={handleSubmit} className='form' action="get">
            <input type="text" placeholder="Start finding your favourite gifs!"/>
            <select alt="rating">
                    <option value="g">g</option>
                    <option value="pg">pg</option>
                    <option value="pg-13">pg-13</option>
                    <option value="r">r</option>
            </select>
            <button className="search" >Find</button>
        </form>   
    </>
   )
}

export default Search