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
        position: sticky;
        align-self: flex-start;
        top: 0;
        height: 100vh;
        align-items: center;
        color: ${props => props.theme.darkgray};
    }
    @media only screen and (min-width: 1200px){
        width: 80%;
    }
`

const Header = styled.div`
    max-width: 35vw;
    margin-left: 10rem;
    &>h1 {
        margin-bottom: 1rem;
    }
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
    &>h1{
        margin: 0;
    }
`

const HeaderMobileBlurb = styled.div`
    max-width: 100vw;
    text-align: center;
    padding: 1rem;
    background: ${props => props.theme.cream};
    color: ${props => props.theme.darkgray};
    &>h3{
        font-size: 1.5rem;
        text-transform: none;
        font-weight: 600;
    }
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

const info = [
    {title: "CLASS DAYS",
    titleDesc: "Across the four undergraduate schools, the class of 2018 boasts exceptional leaders, thinkers, athletes, and artists. Here is a selection of the graduating seniors who have made a lasting impact on the campus community.",
    printLink: "https://files-cardinalatwork-stanford-edu.s3-us-west-2.amazonaws.com/s3fs-public/styles/9-col-banner/public/feb_2019_uhr_rwc_article_istock-952726174.png?itok=74InHOIl"
    }
]

export default class Section extends React.Component {
    render(){
        const Articles = this.props.data.map((el, i) => {
            let id = (`${this.props.name} ${i}`).replace(/ /g, '-')
            return <ArticleBox key={i} data={el} id={id}/>
        })
        const TitleCards = info.map(info => <TitleCard info = {info}/>)
        return(
                <SectionWrapper ref={this.props._ref}>
                    <HeaderWrapper>
                        <Header>
                            <h1>{this.props.name}</h1>
                            </HeaderBlurb>
                        </Header>
                    </HeaderWrapper>
                    <ArticlesWrapper>
                        <MobileAndTablet>
                            <HeaderWrapperMobile>
                                <HeaderMobileTitle>
                                    <h1>{this.props.name}</h1>
                                </HeaderMobileTitle>
                                <HeaderMobileBlurb>
                                    <h3>{this.props.blurb}</h3>
                                </HeaderMobileBlurb>
                            </HeaderWrapperMobile>
                        </MobileAndTablet>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}