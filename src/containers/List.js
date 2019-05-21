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
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    @media only screen and (max-height: 650px){
        padding: 0.1rem;
    }
`

const Name = styled.div`
    font-weight: bold;
    &>h2{
        font-size: 0.75rem;
        line-height: 0.85rem;
        margin: 0;
        margin-bottom: 0.4rem
    }
`

const Desc = styled.div`
    text-transform: capitalize;
    &>h3{
        font-size: 0.5rem;
        line-height: 0.6rem;
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
                    <Name><h2>{this.props.list.name}</h2></Name>
                    <Desc><h3>{this.props.list.description}</h3></Desc>
                </Contained>	
            </Container>
		)
	}
}