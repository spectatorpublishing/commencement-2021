import React from 'react';
import styled from 'styled-components';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5em;
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
            <a href={id}>
			<BigPapa>
                <Name><h1>{this.props.list.name}</h1></Name>
                <Desc><h3>{this.props.list.description}</h3></Desc>
            </BigPapa>	
            </a>
		)
	}
}