import React from 'react';
import styled from 'styled-components'
import {MobileAndTablet, Desktop} from 'react-responsive-simple'

import ArticleBox from '../components/ArticleBox.js'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.cream};
`

const HeaderWrapper = styled.div`
    display: none;
    width: 70%;
    @media only screen and (min-width: 992px){
        display: inline-flex;
        position: sticky;
        height: 100%;
        top: ${(window.innerHeight < window.innerWidth) ? "calc(20vw - 10vh)" : "30vh"};
        color: ${props => props.theme.darkgray};
        padding: 4rem 0;
    }
    @media only screen and (min-width: 1200px){
        width: 80%;
    }
`

const Header = styled.div`
    max-width: 35vw;
    margin-left: 10rem;
`

const HeaderBlurb = styled.div`
    width: 80%;
    @media only screen and (min-width: 1200px){
        width: 90%;
    }
`

const HeaderWrapperMobile = styled.div`
    width: 100vw;
    height; 8rem;
    display: block;  
    margin: 2rem 0;
`

const HeaderMobileTitle = styled.div`
    max-width: 100vw;
    text-align: center;
    margin: 0;
    padding: 2rem 0;
    background: ${props => props.theme.babyBlue};
    color: ${props => props.theme.cream};
`

const HeaderMobileBlurb = styled.div`
    max-width: 100vw;
    text-align: center;
    padding: 1rem;
    background: ${props => props.theme.cream};
    color: ${props => props.theme.darkgray};
`

const ArticlesWrapper = styled.div`
    width: 100vw;
    @media only screen and (min-width: 992px){
        display: inline-block;
        width: 45vw;
        background: ${props => props.theme.babyBlue};
    }
    background: ${props => props.theme.cream};
    padding: 4rem 0;
`

export default class Section extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        const Articles = this.props.data.map((el, i) => (
            <ArticleBox key={i} data={el}/>
        ))
        return(
                <SectionWrapper ref={this.props._ref}>
                    <HeaderWrapper>
                        <Header>
                            <h1 style={{"margin-bottom": "1rem"}}>{this.props.name}</h1>
                            <HeaderBlurb>
                                <h3>{this.props.blurb}</h3>
                            </HeaderBlurb>
                        </Header>
                    </HeaderWrapper>
                    <ArticlesWrapper>
                        <MobileAndTablet>
                            <HeaderWrapperMobile>
                                <HeaderMobileTitle>
                                    <h1 style={{"margin": "0"}}>{this.props.name}</h1>
                                </HeaderMobileTitle>
                                <HeaderMobileBlurb>
                                    <h3 style={{"font-size": "1.5rem", "text-transform": "none","font-weight": "600"}}>{this.props.blurb}</h3>
                                </HeaderMobileBlurb>
                            </HeaderWrapperMobile>
                        </MobileAndTablet>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}