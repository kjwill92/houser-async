import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './head_logo.png';
import styled from 'styled-components';
import active from './../icons/step_active.png';
import inactive from './../icons/step_inactive.png';
import completed from './../icons/step_completed.png';
import {connect} from 'react-redux';
import {updateImg} from './../../dux/reducer';

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
    > div{
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
            img_url: ''
        }
    }
    
    handleImgUrl = (e) => {
        this.props.updateImg(e.target.value)
    }

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
                    Step 3
                    <br/>
                    <br/>
                    <div/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={active} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                    <div/>
                    <br/>
                    image container
                    <h3>Image URL</h3><input onChange={this.handleImgUrl} value={this.props.img} type="text"/>
                    <br/>
                    <br/>
                    <Link to={'/wizard/2'}><Button2>Previous Step</Button2></Link>
                    <Link to={'/wizard/4'}><Button2>Next Step</Button2></Link>
                </Middle>
            </Body>
        )
    }
}
function mapStateToProps(reduxState){
    return{
        img: reduxState.img_url
    }
}
export default connect(mapStateToProps, {updateImg})(Dashboard);

            
            