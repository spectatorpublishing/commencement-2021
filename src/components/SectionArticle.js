import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin: 1rem;
    width: 25rem;

    a:hover {
        text-decoration: none;
    }
`;

const Image = styled.img`
    width: 100%;

    :hover {
        filter: brightness(50%);
    }
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.25rem;
    color: #707070;

    :hover {
        /* text-decoration: underline; */
    }
`;

const Author = styled.div`
    color: #707070;
    font-style: italic;
`;

export default class SectionArticle extends React.Component {
    render() {
        return (
            <Wrap>
                <a href={this.props.article.link}>
                    <Image src={this.props.article.img} />
                    <Title>{this.props.article.title}</Title>
                    <Author>{this.props.article.author}</Author>
                </a>
            </Wrap>
        )
    }
}