import React, {useState ,createContext} from 'react'

const Context = createContext({})

export const GifsContext = ({children})=>{
    const [data, setData] = useState({offset: 0, count: 24}) 

    return <Context.Provider value={{data, setData}}>
        {children}
    </Context.Provider>
}

export default Context