import './Pages.scss'
import arrow from '../images/arrow.svg'
import { useContext } from 'react'
import GifsContext from '../context/GifsContext'
import StartFinding from './StartFinding'

const Pages = ()=>{
    const {setCount, data, count, more} = useContext(GifsContext)
   
    const handleClick = (evt)=>{
        if (evt.target.classList.contains('prev')) setCount(count => count !== 1 ? count - 1 : 1)
        else setCount(count => count+1)
    }

    return data ?
    <nav className="pages">
        {count === 1    ? <img src={arrow} alt="Pevious gifs" className="arrow prev disabled" />
                        : <img onClick={handleClick} src={arrow} alt="Pevious gifs" className="arrow prev" />}
                
        <b>{count}</b> {/*Page number*/}

        {!more          ? <img src={arrow} alt="Next gifs" className="arrow next disabled" />
                        : <img onClick={handleClick} src={arrow} alt="Next gifs" className="arrow next" />}
    </nav> 
                : <StartFinding />
}

export default Pages