import React from 'react';
import styled from 'styled-components'

const NavbarWrapper = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0vh;
    z-index: 5;
    @media only screen and (min-width: 992px){
        font-size: 30px !important;
        flex-direction: column;
    }
`

const ItemContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 5vh;
    margin-left: 1rem;
    width: 82vw;
    border-bottom: solid grey 1px;  
    @media only screen and (min-width: 992px){
        flex-direction: column;
        height: 60vh;
        margin-top: 15vh;
        transform: rotate(180deg);
        padding-right: 3vw;
        width: 2vw;
        left: 0;
        margin-left: 0rem;
        border-bottom: none;  
        border-left: solid grey 1px;    
    }
`

const NavItemContainer =styled.div`
    padding-left: 1vw;
`

const NavItem = styled.div`
    border-bottom: 2px solid ${props => props.active ? props.theme.lightGray : "transparent"};
    color:grey;
    @media only screen and (min-width: 992px){
        writing-mode: vertical-rl;
        padding-left: 1vw;
        border-bottom: none;
        border-left: 3px solid ${props => props.active ? props.theme.lightGray : "transparent"};
    }
`

const CrownLogo =styled.a`
    position: relative;
    background-image: url("https://s3.amazonaws.com/year-in-review-assets/spectator-logo.png?fbclid=IwAR3Li82vFjfxfsNhBbfEkqAAwV3IhXkyT6Ds5HJKos7fS24-ry81K2pJn6g");
    background-size: contain;
    background-repeat: no-repeat;
    height: 10vw;
    width: 10vw;
    top: 3.4vh;
    left: 2vw;
    @media only screen and (min-width: 992px){
        height: 4vw;
        width: 4vw;
        top: 10vh;
        left: 3.1vw;
    }
`

export default class Navbar extends React.Component {
    render(){
        const NavItems = this.props.sections.map((el, i)=>(
            <NavItem key={i} active={this.props.active === i} onClick={()=>{this.props.navigateTo(i)}}>
                <h3>{el}</h3>
            </NavItem>
        ))
        // Because css only supports writing downwards and we want to write upwards, we
        // are rotating the whole thing by 180deg and reversing the items
        return (
            <NavbarWrapper>
                <CrownLogo href= "https://www.columbiaspectator.com/"/>
                <ItemContainer>
                    {NavItems.reverse()}
                </ItemContainer>
            </NavbarWrapper>
        )
    }
}