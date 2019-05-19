import React from 'react';
import styled from 'styled-components'

const ArticleBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    color: ${props => props.theme.darkgray};
    @media only screen and (min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
        align-items: unset;
        text-align: left;
        color: ${props => props.theme.cream};
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
    }
`

const ArticleInfo = styled.div`
    width: 60%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`

export default class ArticleBox extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(<ArticleBoxWrapper>
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