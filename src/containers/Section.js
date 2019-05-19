import React from 'react';
import styled from 'styled-components'
import {Desktop} from 'react-responsive-simple'

import ArticleBox from '../components/ArticleBox.js'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderWrapper = styled.div`
    display: none;
    @media only screen and (min-width: 992px){
        display: inline-flex;
        position: sticky;
        align-self: flex-start;
        top: 0;
        height: 100vh;
        align-items: center;
    }
`

const Header = styled.div`
    max-width: 35vw;
    margin-left: 10rem;
`

const ArticlesWrapper = styled.div`
    width: 100vw;
    @media only screen and (min-width: 992px){
        display: inline-block;
        width: 45vw;
    }
    background: ${props => props.theme.babyBlue};
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
                            <h1>{this.props.name}</h1>
                        </Header>
                    </HeaderWrapper>
                    <ArticlesWrapper>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}