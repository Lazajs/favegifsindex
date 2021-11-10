import './Pages.scss'
import arrow from '../images/arrow.svg'
import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

const Pages = ()=>{
    const {setCount, data, count} = useContext(GifsContext)
   
    const handleClick = (evt)=>{
        if (evt.target.classList.contains('prev')) setCount(count => count !== 1 ? count - 1 : 1)
        else setCount(count => count+1)
    }

    return data ?
    <nav className="pages">
        {count === 1    ? <img src={arrow} alt="Pevious gifs" className="arrow prev disabled" />
                        : <img onClick={handleClick} src={arrow} alt="Pevious gifs" className="arrow prev" />}
                
        <b>{count}</b> {/*Page number*/}

        {!count         ? <img src={arrow} alt="Next gifs" className="arrow next disabled" />
                        : <img onClick={handleClick} src={arrow} alt="Next gifs" className="arrow next" />}
    </nav> 
                : <h2>Search some gifssssssssssssss</h2>
}

export default Pages