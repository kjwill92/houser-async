import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './houser_logo.png';
import axios from 'axios';

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
            username: '',
            password: ''
        }
    }
    login = () => {
        let {username, password} = this.state;
        axios.post('/api/auth/login', {username, password}).then(res => {
            this.setState({
                username: res.data,
                password: res.data
            })
            this.props.history.push('/dashboard')
        })
    }
    register = () => {
        let {username, password} = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.setState({
                username: res.data,
                password: res.data
            })
            this.props.history.push('/dashboard')
        })
    }
    handleName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePass = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    render(){
        return(
            <Body>
                <Middle>
                    <img src={logo} alt=""/>
                    <br/>
                    <br/>
                    Username <input onChange={this.handleName} type="text"/>
                    <br/>
                    Password <input onChange={this.handlePass} type="text"/>
                    <br/>
                    <br/>
                    <Button onClick={this.login} >Login</Button>
                    <Button2 onClick={this.register} >Register</Button2>
                </Middle>
            </Body>
        )
    }
}
export default Auth;