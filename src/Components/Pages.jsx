import {useContext} from 'react'
import './Pages.scss'
import GifsContext from '../context/GifsContext';

const Pages = ({status})=>{
    const {data, setData} = useContext(GifsContext)

    const handleClick = ()=>{
        setData({
            count: data.count,
            offset: data.offset + 10,
            topic: data.topic,
            rating: data.rating
        })
    }

    return  <>
                {
                    status  ? <p onClick={handleClick} className="pages__container-p">Load more gifs</p>
                            : ''
                }
            </>
}

export default Pages