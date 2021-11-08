import {useContext} from 'react'
import './Pages.scss'
import GifsContext from '../context/GifsContext';

const Pages = ()=>{
    const {setOffset, more} = useContext(GifsContext)

    const handleClick = ()=>{
        setOffset(prevOffset => prevOffset + 12)
    }

    return  <>
                {
                    more ? <p onClick={handleClick} className="pages__container-p">Load more gifs</p>
                            : ''
                }
            </>
}

export default Pages