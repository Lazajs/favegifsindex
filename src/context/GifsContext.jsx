import React, {createContext, useEffect} from 'react'
import getGifs from '../services/getGifs'
import getTrendings from '../services/getTrendings'
import useInformation from '../hooks/useInformation'

const Context = createContext({})

export function GifsContext({children}){
    const [gifList, setGifs, data, setData, count, setCount, more, setMore] = useInformation()
    let offset = count === 1 ? 0 : count * 12 + 1
    
    const getNewGifs = (off, callback)=>{
        off === 0 && setCount(1)
        getGifs(data, off).then(info => info.length ? setGifs(info) : callback()) 
    } // set the gifs array

    useEffect(()=>{
        getTrendings().then(res => setGifs(res)) //homepage gifs
    },[])

    useEffect(()=>{
        if(data) getNewGifs(offset, ()=> setMore(false))
    }, [count])

    useEffect(()=>{
        if (data) {
            getNewGifs(0,()=> setData(prev => prev.prev || '' ))
        }
    },[data])

    useEffect(()=>{
        if (gifList.length < 12) setMore(false)
        else setMore(true)
    },[gifList])

    return <Context.Provider value={{data, setData, count, setCount, more,  gifList}}>
        {children}
    </Context.Provider>
}

export default Context