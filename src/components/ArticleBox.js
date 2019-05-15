import React from 'react';
import styled from 'styled-components'

const ArticleBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`

const ArticleImage = styled.div`
    display: inline-block;
    width: 250px;
    height: 250px;
    margin-left: -125px;
    border-radius: 50%;
    overflow: hidden;
    & img {
        width: 100%;
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