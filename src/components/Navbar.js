import React from 'react';
import styled from 'styled-components'

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 50vh;
    margin-top: -30vh;
    z-index: 5;
    transform: rotate(180deg);
`

const NavItem = styled.div`
    writing-mode: vertical-rl;
    border-left: 2px solid ${props => props.active ? props.theme.lightGray : "transparent"};
`


export default class Navbar extends React.Component {
    render(){
        const NavItems = this.props.sections.map((el, i)=>(
            <NavItem key={i} active={this.props.active === i} onClick={()=>{this.props.navigateTo(i)}}>
                <h3>{el}</h3>
            </NavItem>
        ))
        return (
            <NavbarWrapper>
                {NavItems.reverse()}
            </NavbarWrapper>
        )
    }
}