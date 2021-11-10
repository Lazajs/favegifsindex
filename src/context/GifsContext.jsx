import React, {useState ,createContext, useEffect, useRef} from 'react'
import getGifs from '../services/getGifs'
import getTrendings from '../services/getTrendings'

const Context = createContext({})

export function GifsContext({children}){
    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState('')  // gifs query data 
    const [count, setCount] = useState(1) //offset for the fetch
    let offset = count === 1 ? 0 : count * 12 + 1
    

    useEffect(()=>{
        getTrendings().then(res => setGifs(res)) //homepage gifs
    },[])

    useEffect(()=>{
        if(data) getGifs(data, offset).then(info => info.length ? setGifs(info) : setCount(null)) 
    }, [count])

    useEffect(()=>{
        if (data) {
            setCount(1)
            getGifs(data, offset).then(info => info.length ? setGifs(info) : '') 
        }
    },[data])

    return <Context.Provider value={{data, setData, count, setCount, gifList}}>
        {children}
    </Context.Provider>
}

export default Context