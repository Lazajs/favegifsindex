import { useRef, useState, useEffect } from 'react'
import Header from './Components/Header'
import Main from './Components/Main';
import Footer from './Components/Footer';
import {GifsContext} from './context/GifsContext'
import { DeviceContext } from './context/DeviceContext';

const App = ()=>{
  // search queries 
  const topic = useRef(null)
  const rating = useRef(null)
  const form = useRef(null)

  const [options, setOptions] = useState({topic: "dog", rating: "g"})

  // change state 
  const handleSubmit = (e)=>{
    if(e) e.preventDefault()

    setOptions({
        topic: topic.current.value,
        rating: rating.current.selectedOptions[0].outerText
    })
  }

  useEffect(()=>{
    form.current.onsubmit = handleSubmit
  }, [options])
  

  return (
    <DeviceContext>
      <Header topic={topic} rating={rating} form={form} />
      <GifsContext> 
        <Main topics={options.topic} rating={options.rating} />
      </GifsContext> 
      <Footer />
    </DeviceContext>
  )
}


export default App;