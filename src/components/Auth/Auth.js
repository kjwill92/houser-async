import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './houser_logo.png'

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #afd4c0;
    height: 100vh;
`
const Middle = styled.div`
    width: 50%;
    height: 100%;
    background: white;
    padding: 10px;
`
const Button = styled.button`
    background: #8aea92;
    color: black;
    padding:6px 15px;
    border-radius: 3px;
`
const Button2 = styled.button`
    background: #3b5249;
    color: white;
    padding:6px 15px;
    border-radius: 3px;
`

class Auth extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <Body>
                <Middle>
                    <img src={logo} alt=""/>
                    <br/>
                    <br/>
                    Username <input type="text"/>
                    <br/>
                    Password <input type="text"/>
                    <br/>
                    <br/>
                    <Button>Login</Button>
                    <Button2>Register</Button2>
                </Middle>
            </Body>
        )
    }
}
export default Auth;