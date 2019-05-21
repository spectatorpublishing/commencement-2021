import React from 'react';
import styled from 'styled-components';

const Container = styled.a` 
    transition: 0.2s;
    transform-origin: center;
    &:hover{
        text-decoration: none;
    }
    &:visited{
        text-decoration: none;
    }
    @media only screen and (min-height: 651px){
        &:hover{
            text-decoration: none;
            transform: scale(1.15);
        }
    }
`

const Contained = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    @media only screen and (max-height: 650px){
        padding: 0.1rem;
    }
`

const Name = styled.div`
    font-weight: bold;
    &>h1{
        font-size: 1rem;
        line-height: 2rem;
        margin: 0;
    }
`

const Desc = styled.div`
    text-transform: capitalize;
    &>h3{
        font-size: 0.5rem;
        line-height: 0.5rem;
        margin: 0;
    }
`

export default class List extends React.Component {
	render() {
        var newID = this.props.list.name;
        var id = newID.replace(/ /g, "-");
        id = "#" + id;
		return (
            <Container href={id}>
                <Contained>
                    <Name><h1>{this.props.list.name}</h1></Name>
                    <Desc><h3>{this.props.list.description}</h3></Desc>
                </Contained>	
            </Container>
		)
	}
}