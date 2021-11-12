import {useState} from 'react'

function useInformation() {
    const [gifList, setGifs] = useState([]) //list of gifs
    const [data, setData] = useState('')  // gifs query data 
    const [count, setCount] = useState(1) //offset for the fetch
    const [more, setMore] = useState(true) //more gifs on page change?

    return [gifList, setGifs, data, setData, count, setCount, more, setMore]
}

export default useInformation
    
   