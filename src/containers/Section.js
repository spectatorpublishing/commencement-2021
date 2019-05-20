import React from 'react';
import styled from 'styled-components'
import TitleCard from './titleCard.js';

import ArticleBox from '../components/ArticleBox.js'

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    max-width: 35vw;
    margin-left: 10rem;
    @media only screen and (min-width: 992px){
        display: inline-flex;
        position: sticky;
        top: 40vh;
        height: 100%;
    }
`

const ArticlesWrapper = styled.div`
    width: 100vw;
    @media only screen and (min-width: 992px){
        display: inline-block;
        width: 45vw;
    }
    background: ${props => props.theme.babyBlue};
`

const info = [
    {title: "CLASS DAYS",
    titleDesc: "Across the four undergraduate schools, the class of 2018 boasts exceptional leaders, thinkers, athletes, and artists. Here is a selection of the graduating seniors who have made a lasting impact on the campus community.",
    printLink: "https://files-cardinalatwork-stanford-edu.s3-us-west-2.amazonaws.com/s3fs-public/styles/9-col-banner/public/feb_2019_uhr_rwc_article_istock-952726174.png?itok=74InHOIl"
    },
    {title: "SENIOR PROFILES",
    titleDesc: "Across the four undergraduate schools, the class of 2018 boasts exceptional leaders, thinkers, athletes, and artists. Here is a selection of the graduating seniors who have made a lasting impact on the campus community.",
    printLink: "https://files-cardinalatwork-stanford-edu.s3-us-west-2.amazonaws.com/s3fs-public/styles/9-col-banner/public/feb_2019_uhr_rwc_article_istock-952726174.png?itok=74InHOIl"
    },
    {title: "SENIOR COLUMNS",
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
                        {TitleCards}
                    </HeaderWrapper>
                    <ArticlesWrapper>
                        {Articles}
                    </ArticlesWrapper>
                </SectionWrapper>
        )
    }
}