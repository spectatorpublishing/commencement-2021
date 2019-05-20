import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://www.motherjones.com/wp-content/uploads/2018/06/panda-research-6-27-18-2.jpg")
`

const ClassDaysNum = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        padding-left:15vw;
        width:35vw;
        font-size:2rem;
    }
`
const ClassDaysBody = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        width:65vw;
        height:15vh;
    }
`

const ClassDaysContainer = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        display:flex;
        flex-direction:inline-row;
        justify-content:space-around;
        background:white;
    }
`

const TitleButton = styled.div`
    text-shadow: 1px 1px 10px rgba(0,0,0,0.75);
    color: ${props => props.theme.white};
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &>h2{
        margin: 0;
    }
    &>div{
        border-bottom: 4px solid ${props => props.theme.white};
        width: 0;
        transition: width 0.2s;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.75);
    }
    &:hover>div{
        width: 100%;
    }
    @media only screen and (max-width: 992px){
        &>div{
            display: none;
        }
    }
`

const SectionContainer=styled.div`
    display:flex;
    flex-direction:row;
    width:80vw;
    justify-content:space-between;
    @media only screen and (max-width: 992px){
        display:flex;
        flex-direction:column;
        justify-conent:space-around;
        width:60vw;
        height:40vh;
        overflow:hidden;
        text-align:center;
        text-decoration: underline;
        color:white;
        font-size:1.5rem;
        font-weight:800;
        padding-bottom:20vh;
    }
`
const CommencementHeader=styled.div`
    display:flex;
    height:80vh;
    width:100vw;
    justify-content:space-around;
    align-items:center;
    color:white;
    padding-bottom: 0vw;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.75);
    &>h1 {
        font-size: 6rem;
    }
    @media only screen and (max-width: 992px){
        padding-bottom: 30vw;
        word-wrap: break-word;
        width:50vw;
        height:20vh;
        padding-top:20vh;
        text-align:center;
        color:white;
        &>h1 {
            font-size: 2.5rem;
        }
    }
`

export default class Title extends React.Component {
    
    render(){
        const SectionButtons = this.props.sections.map((el, i)=>(
            <TitleButton onClick={()=>{this.props.navigateTo(i)}} key={i}><h2>{el}</h2><div/></TitleButton>
        ))
        return(
            <TitleWrapper>
                <CommencementHeader><h1>Commencement 2019</h1></CommencementHeader>
                <SectionContainer>
                {SectionButtons}
                </SectionContainer>
            </TitleWrapper>
        )
    }
}