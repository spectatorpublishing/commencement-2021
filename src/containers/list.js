import React from 'react';
import styled from 'styled-components';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5em;
`

const Name = styled.div`
    font-weight: bold;
`

const Desc = styled.div`
    text-transform: capitalize;
`

export default class Objects extends React.Component {
	render() {
		return (
			<BigPapa>
                <Name onClick='window.scrollTo({top: document.querySelector(`${this.props.name} ${i}`).replace(/ /g, "-").offsetTop, behavior: "smooth"})'>{this.props.list.name}</Name>
                <Desc>{this.props.list.description}</Desc>
            </BigPapa>	
		)
	}
}