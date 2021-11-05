import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import {GifsContext} from './context/GifsContext'

const App = ()=>{
  return ( <>
    <GifsContext> 
      <Header />
      <Main />
    </GifsContext> 
    <Footer />s
  </>)
}


export default App;