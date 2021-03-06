import React from 'react';
import styled from 'styled-components'
import TitleCard, {Button} from './TitleCard.js';
import { MobileAndTablet } from 'react-responsive-simple'
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

const HeaderWrapperMobile = styled.div`
    width: 100vw;
    height; 8rem;
    display: block;  
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        font-size: 1rem;
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

export default class Section extends React.Component {
    render(){
        var list = [];
        const Articles = this.props.data.map((el, i) => {
            var newID = el.title;
            var id = newID.replace(/ /g, "-");
            console.log(id);
            list[i] = {
                name: el.title,
                description: el.author
            }
            return <ArticleBox key={i} data={el} id={id}/>
        })
        const info = [
            {title: this.props.name,
            titleDesc: this.props.blurb,
            cols: this.props.cols,
            list: list,
            printLink: "https://s3.amazonaws.com/cds-static-hosting/Commencement+2019+official.pdf"
            }
        ]
        const TitleCards = info.map(info => <TitleCard info = {info}/>)
        return(
                <SectionWrapper ref={this.props._ref}>
                    <HeaderWrapper>
                        {TitleCards}
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
                                <Button href={info[0].printLink} target="_blank"><h3>SEE IT IN PRINT</h3></Button>
                            </HeaderWrapperMobile>
                        </MobileAndTablet>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}