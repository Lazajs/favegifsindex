import React, {useState ,createContext, useEffect} from 'react'
import getGifs from '../services/getGifs'

const Context = createContext({})

export const GifsContext = ({children})=>{
    // random topic 
    const arr = ["cats", "animals", "dogs", "random", "funny", "avengers","epic"]
    let num = Math.floor(Math.random()*arr.length)

    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState({offset: 0, count: 12, topic: arr[num], rating: "g", src: null})  // gifs query data  
    const [isFound, setFound] = useState(true) // if no more gifs are found...

    console.log(gifList)
    useEffect(()=>{
        setFound(true)
        getGifs(data.topic, data.rating, data.count, data.offset).then(urls => urls ? setGifs(urls) : setFound(false))   
    },[data])

    return <Context.Provider value={{data, setData, gifList, isFound}}>
        {children}
    </Context.Provider>
}

export default Context