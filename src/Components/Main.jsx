import { useContext, useState, useEffect} from 'react';
import './Main.scss'
import Gif from './Gif'
import Pages from './Pages'
import GifsContext from '../context/GifsContext';
import Loading from './Loading';

const Main = ()=>{
    const { gifList } = useContext(GifsContext) // now we fetch from the context and receive from here
    const [render, setRender] = useState(true)

    useEffect(()=>{setRender(gifList ? true : false)},[gifList])

    return (
        (render) ? 
        <>
            <main className="container">
                { 
                    gifList.map(singleGif => <Gif url={singleGif.url} key={singleGif.id} title={singleGif.title} />)               
                }
            </main>
            <Pages />
        </>
        
        : <Loading/>
               )
}

export default Main;