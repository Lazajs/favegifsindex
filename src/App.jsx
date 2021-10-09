import './App.css';
import { Component } from 'react'
import Testing from './Components/TestingCom';
import UsingTheHooks from './Components/UsingHooks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Testing/>
        {/* <UsingTheHooks /> */}
      </div>
    );
  }
}
 
export default App;