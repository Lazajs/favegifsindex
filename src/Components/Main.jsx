import { useContext, useEffect, useState } from 'react';
import './Main.css'
import Gif from './Gif'
import Pages from './Pages'
import GifsContext from '../context/GifsContext';
import Loading from './Loading';

const Main = ()=>{
    const { gifList, isFound } = useContext(GifsContext) // now we fetch from the context and receive from here

    return (
        (gifList) ? 
        <>
            {isFound ? '' : <h2 className="advice">No more gifs found</h2>}
            <main className="container">
                {
                    gifList.map(singleGif => <Gif url={singleGif.url} key={singleGif.id} title={singleGif.title} />)
                }
            </main>
            <Pages status={isFound} />
        </>
               : <Loading/>)
}

export default Main;