import React from 'react';
import styled from 'styled-components'

import ArticleBox from '../components/ArticleBox.js'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderWrapper = styled.div`
    display: inline-flex;
    position: sticky;
    top: 40vh;
    height: 100%;
`

const Header = styled.div`
`

const ArticlesWrapper = styled.div`
    display: inline-block;
    width: 45vw;
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