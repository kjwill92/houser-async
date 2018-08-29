import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './head_logo.png';
import styled from 'styled-components';
import active from './../icons/step_active.png';
import inactive from './../icons/step_inactive.png';
import {connect} from 'react-redux';
import {updateName, updateDescrip} from './../../dux/reducer';

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
    > h4 {
        position: absolute;
        right: 290px;
        color: white;
    }
    > div{
        padding-left: 10px;
        > h2 {
        color: white;
        }
    }
`
const Logo = styled.div`
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
    > div {
        display: flex;
    }
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    background: #fec2c2;
    font-size: 18px;
    padding: 4px;
    border-radius: 3px;
`
const Button2 = styled.button`
    background: #3b5249;
    color: white;
    padding:6px 15px;
    border-radius: 3px;
`



class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            property_name: '',
            property_descrip: ''
        }
    }

    handlePropName = (e) => {
        this.props.updateName(e.target.value)
    }
    handlePropDescrip = (e) => {
        this.props.updateDescrip(e.target.value)
    }
    // handleChange = () => {
    //     this.props.updateName(this.state.property_name)
    //     this.props.updateDescrip(this.state.property_descrip)
    // }

    render(){
        return(
            <Body>
                <Header>
                    <Logo>
                        <img src={logo} alt=""/>
                    </Logo>
                    <div>
                        <h2>Houser</h2>
                    </div>
                    <div>
                        <h2>Dashboard</h2>
                    </div>
                    <h4>Logout</h4>
                </Header>
                <Middle>
                    <Top>
                        <h3>Add new listing</h3>
                        <Link to={'/dashboard'}><Button>Cancel</Button></Link>
                    </Top>
                        <br/>
                        Step 1
                        <br/>
                        <br/>
                    <div/>
                        <img src={active} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                    <div/>
                        <h3>Property Name</h3><input type="text" onChange={this.handlePropName} value={this.props.name}/>
                        <br/>
                        <h3>Property Description </h3>
                        <textarea name="" id="" cols="70" rows="10" onChange={this.handlePropDescrip} value={this.props.descrip}></textarea>
                        <br/>
                        <br/>
                        <Link to={'/wizard/2'}><Button2>Next Step</Button2></Link>
                </Middle>
            </Body>
            
        )
    }
}
function mapStateToProps(reduxState){
    return {
        name: reduxState.property_name,
        descrip: reduxState.property_descrip       
    }
}
export default connect(mapStateToProps, {updateName, updateDescrip})(Dashboard);