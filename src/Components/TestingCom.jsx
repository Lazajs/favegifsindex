import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Testing = (props)=>{
    const [counter, setCounter] = useState(0)

    useEffect(()=> {
        document.title = `Clicked ${counter} times`
    },[counter])

    return (
        <div>
        <p>You clicked {counter} times</p>
        <button onClick={() => setCounter(counter + 1)}>
          Click me
        </button>
      </div>
    )


}
 
export default Testing;