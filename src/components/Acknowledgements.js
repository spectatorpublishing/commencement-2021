import React from 'react';
import styled from 'styled-components';
import Credits from '../utils/Credits';
import {MobileAndTablet, LargeDesktop, SmallDesktop} from 'react-responsive-simple';

const Wrapper =styled.div`
    background: ${props => props.theme.cream};
    font-family: brandon-grotesque;
    padding-bottom: 8vw;
    height: auto;
    @media only screen and (min-width:1200px){
        height: 100%;
    }    
`;

const Title =styled.div`
    text-transform: uppercase;
    font-size: 1.6em;
    margin-left: 10vw;
    color: grey;
    font-weight:900;
    margin-bottom:.7em;
    padding-top:2em;
    @media only screen and (min-width:1200px){
        font-size: 2.8em;
    }
`;


const Panel =styled.div`
    width:100%;
    height:auto;
    display: flex;
    flex-direction:column;
    overflow:hidden;
    // background-color: red;
    @media only screen and (min-width:1200px){
        width:24%;
    }
`;

const PanelContainer =styled.div`
    display:flex;
    width:90%;
    padding-left:10%;
    justify-content: space-between;
`;

const Section =styled.div`
    font-size: 1.13rem;
    color: grey;
    text-transform:uppercase;
    margin-bottom:.5rem;
`;

const SectionContainer =styled.div`
    margin-bottom: 1em;
`;

const Name =styled.div`
    font-size: .9rem;
    color: grey;
    font-weight: bold;
    font-style: italic;
    white-space: nowrap;
    font-family: filson-pro;
    float:left;
    ::after {
        margin: 0 -1rem 0 0.05rem;
        content: ",";
        font-style: normal;
    };
    display: block;
`;

const Position =styled.div`
    font-size: .8rem;
    color: grey;
    float: left;
    display: block;
    margin-left: 1.2rem;
`;

const Person = styled.div`
    display: inline-block;    
`;

const ContainPerson = styled.div`
    display: flex;
`





class Division extends React.Component{
    render(){
        var creditsList =[];
        var section = this.props.section;
        if (section != undefined){
            creditsList = Credits[section].map((el,i) =>
                <ContainPerson><Person>
                    <Name>{el.name}</Name>
                    <Position>{el.title}</Position>
                </Person>
                </ContainPerson>
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
        var panel1 = ["Corporate Board", "News","Sports","Engagement"];
        var panel2 = ["A&E","Revenue","Photo"];
        var panel3 = ["Opinion","Copy","Design","Spectrum"];
        var panel4 = ["The Eye","Product"];
        
        return(
            <Wrapper>
                <Title>Acknowledgements</Title>
                <LargeDesktop>
                    <PanelContainer>
                        <Panel>{panel1.map((element,i)=><Division key={i} section= {element}/>)}</Panel>
                        <Panel>{panel2.map((element,i)=><Division key={i+100} section= {element}/>)}</Panel>
                        <Panel>{panel3.map((element,i)=><Division key={i+200} section= {element}/>)}</Panel>
                        <Panel>{panel4.map((element,i)=><Division key={i+300} section= {element}/>)}</Panel>
                    </PanelContainer>
                </LargeDesktop>
                <MobileAndTablet>
                    <PanelContainer>
                        <Panel>{panel1.concat(panel2).concat(panel3).concat(panel4).map((element,x)=><Division section= {element}/>)}</Panel>
                    </PanelContainer>
                </MobileAndTablet>
                <SmallDesktop>
                    <PanelContainer>
                        <Panel>{panel1.concat(panel3).map((element,i)=><Division key={i} section= {element}/>)}</Panel>
                        <Panel>{panel2.concat(panel4).map((element,i)=><Division key={i} section= {element}/>)}</Panel>
                    </PanelContainer>
                </SmallDesktop>
            </Wrapper>
        )
    }
}
