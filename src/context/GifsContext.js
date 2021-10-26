import React, {useState ,createContext} from 'react'

const Context = createContext({})

export const GifsContext = ({children})=>{
    const arr = ["cats", "animals", "dogs", "random", "funny", "avengers","epic"]
    let num = Math.floor(Math.random()*arr.length)
    const [data, setData] = useState({offset: 0, count: 24, topic: arr[num], rating: "g"}) 

    return <Context.Provider value={{data, setData}}>
        {children}
    </Context.Provider>
}

export default Context