import React from 'react';
import styled from 'styled-components';
import SectionArticle from '../components/SectionArticle';

const Wrap = styled.div`
    background-color: #B5E0F7;
    padding: 1rem 5rem;
    padding-left: 2rem;
    margin: 0;
    color: #707070;
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ArticleWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Section = styled.div`
    margin: 5rem 0;
`;

export default class Articles extends React.Component {
    render() {
        return (
            <Wrap>
                {
                    this.props.sections.map(section => (
                        <Section id={section.title}>
                            <Title>{section.title}</Title>
                            <ArticleWrap>
                                {
                                    section.articles.map(article => (
                                        <SectionArticle article={article} />
                                    ))
                                }
                            </ArticleWrap>
                        </Section>
                    ))
                }
            </Wrap>
        )
    }
}