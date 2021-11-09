import './Pages.scss'
import arrow from '../images/arrow.svg'
import { useContext, useState, useEffect } from 'react'
import GifsContext from '../context/GifsContext'

const Pages = ()=>{
    const {setOffset} = useContext(GifsContext)
    const [count, setCount] = useState(1)

    const handleClick = (action)=>{
        if (action === 'prev') setCount(count !== 1 ? count-1 : 1)
        else if (action === 'next') setCount(count+1)
    }

    useEffect(()=>{
        setOffset(count * 12)
    },[count])

    return  <nav  className="pages">
                <img onClick={()=> handleClick('prev')} src={arrow} alt="Pevious gifs" className="arrow prev" />
                <b>{count}</b>
                <img onClick={()=> handleClick('next')} src={arrow} alt="Next gifs" className="arrow next" />
            </nav>
}

export default Pages