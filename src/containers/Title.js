import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ClassDaysNum = styled.div`
    padding-left:15vw;
    width:30vw;
    font-size:2rem;
`
const ClassDaysBody = styled.div`
    width:80vw;
    height:20vh;
`

const ClassDaysContainer = styled.div`
    display:flex;
    flex-direction:inline-row;
    justify-content:space-around;
`

const TitleButton = styled.div`

`

const SectionContainer=styled.div`
    display:flex;
    flex-direction:row;
    height:15vh;
    width:100vw;
    justify-content:space-around;
`
const CommencementHeader=styled.div`
    display:flex;
    height:85vh;
    width:100vw;
    justify-content:space-around;
    align-items:center;
    @media only screen and (max-width: 992px){
        word-wrap: break-word;
        width:100vw;
  
    }
`

export default class Title extends React.Component {
    render(){
        const SectionButtons = this.props.sections.map((el, i)=>(
            <TitleButton key={i}>{el}</TitleButton>
        ))
        return(
            <TitleWrapper>
                <CommencementHeader><h2>Commencement 2019</h2></CommencementHeader>
                <SectionContainer>{SectionButtons}</SectionContainer>
            </TitleWrapper>
        )
    }
}