import React from 'react';
import styled from 'styled-components';
import Credits from '../utils/Credits';
import {MobileAndTablet, Desktop} from 'react-responsive-simple';

const Wrapper =styled.div`
    background: ${props => props.theme.babyBlue};
    font-family: brandon-grotesque;
    padding: 4rem 2rem;
    height: auto;
    @media only screen and (min-width:1200px){
        height: 100%;
    }    
`;

const Title =styled.div`
    text-transform: uppercase;
    font-size: 1.6em;
    color: white;
    font-weight:900;
    margin-bottom: 2rem;
    @media only screen and (min-width:1200px){
        font-size: 2.8em;
    }
`;


const Panel =styled.div`
    width:100%;
    height:auto;
    display: flex;
    flex-direction:column;
    @media only screen and (min-width:1200px){
        width:23%;
    }
`;

const PanelContainer =styled.div`
    display:flex;
    width:90%;
    padding-left: 2rem;
    justify-content: space-between;
`;

const Section =styled.div`
    font-size: 1.13rem;
    color: white;
    text-transform:uppercase;
    margin-bottom:.5rem;
`;

const Name =styled.div`
    font-size: .9rem;
    color: white;
    font-weight: bold;
    font-style: italic;
    white-space: pre;
    font-family: filson-pro;
    ::after {
        content: ", ";
        font-style: normal;
    };
`;

const Position =styled.div`
    font-size: .8rem;
    color: white;
    display: flex;
    align-items: flex-end;
    white-space: nowrap;
`;

const Person = styled.div`
    display:flex;
    flex-direction:row;
`;

const SectionContainer =styled.div`
    margin-bottom: 1em;
`;



class Division extends React.Component{
    render(){
        var creditsList =[];
        var section = this.props.section;
        if (section != undefined){
            creditsList = Credits[section].map((el,i) =>
                <Person>
                    <Name>{el.name}</Name>
                    <Position>{el.title}</Position>
                </Person>
            );
            return(
                <SectionContainer>
                    <Section>{section}</Section>
                    {creditsList}
                </SectionContainer>
            )
        } 
        else{
            return null
        }
    }
}


export default class Acknowledgements extends React.Component{

 
    render(){
        var panel1 = ["Corporate Board", "News","Sports"];
        var panel2 = ["Engineering","Product Design", "A&E","Photo"];
        var panel3 = ["Opinion","Copy","Revenue",];
        var panel4 = ["The Eye","Illustrations","Engagement"];
        
        return(
            <Wrapper id="Ackknowledgements">
                <Title>Acknowledgments</Title>
                <Desktop>
                    <PanelContainer>
                        <Panel>{panel1.map((element,i)=><Division key={i} section= {element}/>)}</Panel>
                        <Panel>{panel2.map((element,i)=><Division key={i+100} section= {element}/>)}</Panel>
                        <Panel>{panel3.map((element,i)=><Division key={i+200} section= {element}/>)}</Panel>
                        <Panel>{panel4.map((element,i)=><Division key={i+300} section= {element}/>)}</Panel>
                    </PanelContainer>
                </Desktop>
                <MobileAndTablet>
                    <PanelContainer>
                        <Panel>{panel1.concat(panel2).concat(panel3).concat(panel4).map((element,x)=><Division section= {element}/>)}</Panel>
                    </PanelContainer>
                </MobileAndTablet>
            </Wrapper>
        )
    }
}
