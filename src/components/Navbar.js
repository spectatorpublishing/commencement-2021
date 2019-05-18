import React from 'react';
import styled from 'styled-components'

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
`

const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-evenly;
    margin-top: 15vh;
    transform: rotate(180deg);
    padding-right: 25px;
    border-left: solid grey 1px;    
`;

const NavItem = styled.div`
    color: ${props => props.theme.darkgray};
    writing-mode: vertical-rl;
    padding-left: 1vw;
    border-left: 3px solid ${props => props.active ? props.theme.lightGray : "transparent"};
    :hover{
        cursor: pointer;
    }
`

const CrownLogo =styled.a`
    position: absolute;
    width: 50px;
    left: -25px;
    top: calc(60vh + 20px);
    transform: rotate(180deg);
    & img{
        width: 100%;
        object-fit: contain;
    }
`;

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
                <ItemContainer>
                    {NavItems.reverse()}
                    <CrownLogo href= "https://www.columbiaspectator.com/">
                        <img alt="Crown Logo" src="https://s3.amazonaws.com/year-in-review-assets/spectator-logo.png?fbclid=IwAR3Li82vFjfxfsNhBbfEkqAAwV3IhXkyT6Ds5HJKos7fS24-ry81K2pJn6g"/>
                    </CrownLogo>
                </ItemContainer>
            </NavbarWrapper>
        )
    }
}