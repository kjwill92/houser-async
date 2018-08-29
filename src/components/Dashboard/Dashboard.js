import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from './head_logo.png';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #afd4c0;
    height: 100vh;
`
const Header = styled.div`
    width: 100%;
    height: 65px;
    background: #519872;
    display: flex;
    align-content: center;
    > h4{
        position: absolute;
        right: 310px;
        color: white;
    }
`
const Div1 = styled.div`
    position: absolute;
    left: 350px;
    > h2 {
        color: white;
        }
`
const Div2 = styled.div`
    position: absolute;
    left: 444px;
    > h2 {
        color: white;
        }
`
const Logo = styled.div`
    position: absolute;
    left: 300px;
    > img{
        width: 35px;
        padding-top: 17px;
    }
`
const Middle = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(to bottom, #e2f3ea, #ffffff);
    padding: 10px;
`
const Button = styled.button`
    background: #8aea92;
    font-size: 18px;
    padding: 8px;
    border-radius: 3px;
`
const Listing = styled.div`
    display: flex;
    margin-bottom: 10px;
    background: lightgray;
`
const Name = styled.div`
    width: 40%;
    padding-left: 5px;
    padding-right: 5px;
    > p {
        font-size: 12px;
    }
    
`
const Pic = styled.div`
    
`
const Other = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    > li {
        font-size: 14px;
        list-style-type: none;
        padding-left: 8px;
    }
`


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            listings: []
        }
    }
    componentDidMount(){
        axios.get('/api/properties').then(res => {
            this.setState({
                listings: res.data
            })
        })
    }

    render(){
        let listingsDisplay = this.state.listings.map((el, i) => {
            return (
                <Listing>
                    <Pic>
                        <img src={el.img_url} alt=""/>
                    </Pic>
                    <Name>
                        <h3>{el.property_name}</h3>
                        <p>{el.property_descrip}</p>
                    </Name>
                    <hr/>
                    <Other>
                        <li>Loan: {el.loan_amount}</li>
                        <li>Monthly Mortgage: {el.monthly_mortgage}</li>
                        <li>Desired Rent: {el.desired_rent}</li>
                        <li>Address: {el.address}</li>
                        <li>City: {el.city}</li>
                        <li>State: {el.state}</li>
                        <li>Zip: {el.zip}</li>
                    </Other>
                </Listing>
            )
        })

        return(
            <Body>
                <Header>
                    <Logo>
                        <img src={logo} alt=""/>
                    </Logo>
                    <Div1>
                        <h2>Houser</h2>
                    </Div1>
                    <Div2>
                        <h2>Dashboard</h2>
                    </Div2>
                    <h4>Logout</h4>
                </Header>
                <Middle>
                    <Link to={'/wizard/1'}><Button>Add new property</Button></Link>
                    <br/>
                    <br/>
                    List properties with "desired rent" greator than: $ <input type="text"/>
                    <button>Filter</button>
                    <button>Reset</button>
                    <br/>
                    <br/>
                    <hr/>
                    <h3>Home Listings</h3>
                    {listingsDisplay}
                </Middle>
            </Body>
        )
    }
}
export default Dashboard;