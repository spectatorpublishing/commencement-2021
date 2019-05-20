import React from 'react';
import styled from 'styled-components';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-weight: bold;
`

const Desc = styled.div`
    text-transform: capitalize;
`

class Objects extends Component {
	render() {
		return (
			<BigPapa>
                <Name onClick='window.scrollTo({top: document.querySelector("#Class-Days-4").offsetTop, behavior: "smooth"}')>{this.props.list.name}</Name>
                <Desc>{this.props.list.description}</Desc>
            </BigPapa>	
		)
	}
}

export default Objects;