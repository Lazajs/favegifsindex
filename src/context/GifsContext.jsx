import React, {useState ,createContext, useEffect} from 'react'
import getGifs from '../services/getGifs'
import getTrendings from '../services/getTrendings'

const Context = createContext({})

export const GifsContext = ({children})=>{
    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState('')  // gifs query data 
    const [offset, setOffset] = useState(0)

    useEffect(()=>{
        getTrendings().then(res => setGifs(res))
    },[])

   
    useEffect(()=>{
       if (offset) getGifs(data.topic, data.rating, offset).then(info => info.length ? setGifs(prev => prev.concat(info)) : '') 
    }, [offset])


    useEffect(()=>{
        setOffset(0)
        if(data) getGifs(data.topic, data.rating, offset).then(urls =>setGifs(urls))
    },[data])

    return <Context.Provider value={{data, setData, setOffset, gifList}}>
        {children}
    </Context.Provider>
}

export default Context