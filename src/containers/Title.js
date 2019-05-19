import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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