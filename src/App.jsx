import './App.css';
import Stilished from './Components/StyledComp'
import { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Stilished color="#000a"/>
    );
  }
}
 
export default App;