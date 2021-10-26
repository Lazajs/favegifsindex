import { useRef, useState, useEffect } from 'react'
import Header from './Components/Header'
import Main from './Components/Main';
import Footer from './Components/Footer';
import {GifsContext} from './context/GifsContext'
import { DeviceContext } from './context/DeviceContext';

const App = ()=>{
  return (
    <DeviceContext>
      <GifsContext> 
        <Header />
        <Main />
      </GifsContext> 
      <Footer />
    </DeviceContext>
  )
}


export default App;