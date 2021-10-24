import {useContext} from 'react'
import './Pages.css'
import GifsContext from '../context/GifsContext';

const Pages = (ref)=>{
    const {data, setData} = useContext(GifsContext)

    const handleClick = ()=>{
        setData({
            count: data.count + 10,
            offset: data.offset + 10
        })
    }

    return <p onClick={handleClick} className="pages__container-p">Load more...</p>     
}

export default Pages