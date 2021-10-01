import React, {Component} from 'react'
import styled from 'styled-components'

class Stilished extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const Title = styled.h1 `
        color: red;
        font-size: 50px;
        `
        return (
            <Title>Hello</Title>
        );
    }
}

export default Stilished;