import React from 'react';
import styled from 'styled-components';
import List from './List.js';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30vw;
    margin-left: 10rem;
    @media only screen and (min-width: 1200px){
        max-width: 35vw;
    }
    max-height: 100vh;
    padding-bottom: 10px;
`
const Title = styled.div`
    text-transform: capitalize;
    font-size: 3.5em;
    font-weight: bold;
    &>h1{
        margin: 0;
    }
    @media only screen and (max-height: 650px){
        &>h1{
            font-size: 3rem;
        }
    }
`

const Categories = styled.div`
    display: grid;
    font-size: 1rem;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-flow: column;
    max-width: 100%;
    @media only screen and (max-height: 650px){
        grid-template-rows: 1fr 1fr;
        overflow: scroll;
    }
`

const Button = styled.a`
    background-color: ${props => props.theme.lightgray};
    border-radius: 25px;
    text-transform: capitalize;
    color: ${props => props.theme.cream};
    display: flex; 
    align-content: center;
    justify-content: center; 
    width: 8rem;
    overflow: hidden;
    padding: 1rem;
    text-decoration: none;
    :hover{color: ${props => props.theme.darkgray}; text-decoration: none;};
    @media only screen and (max-height: 650px){
        width: 8rem;
        padding: 0.3rem;
        &>h3{
            1rem;
        }
    }
`

const Desc = styled.div`
    @media only screen and (max-height: 650px){
        &>h3{
            font-size: 0.8rem;
        }
    }
`
export default class Objects extends React.Component {
	render() {
        const table = this.props.info.list;
        var lists;
        if(table){
            lists = table.map(table => <List list = {table}/>);
        }
        else lists = "";
		return (
			<BigPapa>
                <Title><h1>{this.props.info.title}</h1></Title>
                <br/>
                <Desc><h3>{this.props.info.titleDesc}</h3></Desc>
                <br/>
                <Categories>{lists}</Categories>
                <br/>
                <Button href={this.props.info.printLink}><h3>SEE IT IN PRINT</h3></Button>
            </BigPapa>	
		)
	}
}