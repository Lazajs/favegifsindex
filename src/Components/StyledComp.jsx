import React, {Component} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components'


class LoginBut extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <button onClick={this.props.onClick}>Login</button>
                <p>Login to continue</p>
            </>
         );
    }
}
 
class LogoutBut extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <button onClick={this.props.onClick}>Logout</button>
                <p>Do you want to logout?</p>
            </>
         );
    }
}





class Stilished extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: false }
    }

    handleLog() {
        this.setState(prevState => ({isLogged: !prevState.isLogged}))
    } 

    render() {
       return this.state.isLogged
        ?    <LogoutBut onClick={()=> this.handleLog()} />    
        :    <LoginBut onClick={()=> this.handleLog()} />
    }
}

export default Stilished;