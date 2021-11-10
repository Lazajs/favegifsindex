import React, {useState ,createContext, useEffect} from 'react'
import getGifs from '../services/getGifs'
import getTrendings from '../services/getTrendings'

const Context = createContext({})


export const GifsContext = ({children})=>{
    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState('')  // gifs query data 
    const [count, setCount] = useState(1) //offset for the fetch
    let offset = count === 1 ? 0 : count * 12 + 1

    const getNewGifs = ()=>{ //Fetch data
        getGifs(data, offset).then(info => info.length ? setGifs(info) : setCount(null)) 
    }

    useEffect(()=>{
        getTrendings().then(res => setGifs(res)) //homepage gifs
    },[])

    useEffect(()=>{
        if(data) getNewGifs()
    }, [count])

    useEffect(()=>{
        if (data) {
            setCount(1)
         getNewGifs()
        }
    },[data])

    return <Context.Provider value={{data, setData, count, setCount, gifList}}>
        {children}
    </Context.Provider>
}

export default Context