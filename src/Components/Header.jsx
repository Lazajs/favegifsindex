import './Header.css'
import {useState, useRef, useEffect} from 'react'

const Header = (props)=>{

    const [options, setOptions] = useState(null)

    const topic = useRef(null)
    const number = useRef(null)
    const rating = useRef(null)

    useEffect(()=> {
        handleSubmit()
    },[topic.current,number.current,rating.current])

    const handleSubmit = (e)=>{
        if(e) e.preventDefault()

        setOptions({
            topic: topic.current.value,
            limit: number.current.value,
            rating: rating.current.selectedOptions[0].outerText
        })

        console.log(options)
    }

    return ( 
        <>
            <header className="header">
                <form onSubmit={handleSubmit} className="header__form" action="get">
                    <input ref={topic} type="text" placeholder="Enter a topic"/>
                    <input ref={number} type="tel" placeholder="gifs"/>
                    <select ref={rating}> //.selectedOptions() array .selectedIndex()
                            <option value="g">g</option>
                            <option value="pg">pg</option>
                            <option value="pg-13">pg-13</option>
                            <option value="r">r</option>
                    </select>
                    <input type="submit" value="Search"/>
                </form>
            </header>
        </>
    )
}

export default Header