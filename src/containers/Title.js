import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://s3.amazonaws.com/year-in-review-assets/spectator-logo.png?fbclid=IwAR3Li82vFjfxfsNhBbfEkqAAwV3IhXkyT6Ds5HJKos7fS24-ry81K2pJn6g");
`

const TitleButton = styled.div`

`

export default class Title extends React.Component {
    render(){
        const SectionButtons = this.props.sections.map((el, i)=>(
            <TitleButton key={i}>{el}</TitleButton>
        ))
        return(
            <TitleWrapper>
                <h1>Commencement 2019</h1>
                {SectionButtons}
            </TitleWrapper>
        )
    }
}