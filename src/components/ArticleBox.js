import React from 'react';
import styled, { keyframes } from 'styled-components'

const blowUp = keyframes`
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
`

const ArticleBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    color: ${props => props.theme.darkgraygit};
    @media only screen and (min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
        align-items: unset;
        text-align: left;
        color: ${props => props.theme.cream};
        & div:first-of-type{
            position: relative;
            left: 0;
            transition: left 0.3s;
        }
        & div:last-of-type{
            position: relative;
            right: 0;
            transition: right 0.3s;
        }
        &:hover div:first-of-type{
            left: 6px;
        }
        &:hover div:last-of-type{
            right: 10px;
        }
    }
    &.animate {
        transform-origin: center;
        animation: 1s ${blowUp} infinite;
    }
`

const ArticleImage = styled.div`
    @media only screen and (min-width: 992px){
        margin-left: -125px;
    }
    & a {
        width: 0; //hide this: we only want the img to be clickable
    }
    & img {
        width: 250px;
        height: 250px;
        overflow: hidden;
        border-radius: 50%;
        object-fit: cover;
    }
`

const ArticleInfo = styled.div`
    width: 60%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 1200px){
        width: 70%;
    }
    &>a>h2{
        margin-bottom: 0.3rem;
    }
`

export default class ArticleBox extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(<ArticleBoxWrapper id={this.props.id}>
            <ArticleImage>
                <a href={this.props.data.link}>
                    <img src={this.props.data.img} alt={this.props.data.title}/>
                </a>
            </ArticleImage>
            <ArticleInfo>
                <a href={this.props.data.link}>
                    <h2>{this.props.data.title}</h2>
                </a>
                <h4>By {this.props.data.author}</h4>
                {this.props.data.photographer && <h4>Photograph by {this.props.data.title}</h4>}
            </ArticleInfo>
        </ArticleBoxWrapper>)
    }
}