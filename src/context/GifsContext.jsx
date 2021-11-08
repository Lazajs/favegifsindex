import React, {useState ,createContext, useEffect} from 'react'
import getGifs from '../services/getGifs'


const Context = createContext({})

export const GifsContext = ({children})=>{
    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState({topic: "cats", rating: "g"})  // gifs query data  
    const [offset, setOffset] = useState(0)
    const [more, setMore] = useState(true) 
   
    useEffect(()=>{
        getGifs(data.topic, data.rating, offset).then(info => info !== 0 ? setGifs(prev => prev.concat(info)) : setMore(false)) 
    }, [offset])


    useEffect(()=>{
        setOffset(0)
        setMore(true)
        getGifs(data.topic, data.rating, offset).then(urls =>setGifs(urls))   
    },[data])

    return <Context.Provider value={{data, setData, setOffset, gifList, more}}>
        {children}
    </Context.Provider>
}

export default Context