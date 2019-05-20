import React from 'react';
import styled from 'styled-components';
import List from './list.js';

const BigPapa = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    text-transform: capitalize;
    font-size: 3.5em;
    font-weight: bold;
`

const Categories = styled.div`
    display: grid;
    font-size: 1em;
    grid-template-columns: 1fr 1fr 1fr;
`

const Button = styled.div`
    background-color: rgb(117,116,113);
    border-radius: 25px;
    text-transform: capitalize;
    color: rgb(217,217,209);
    display: flex; 
    align-content: center;
    justify-content: center; 
    width: 8em;
    overflow: hidden;
    padding: 1em;
`
const Desc = styled.div`
    font-size: 1.3em;
`

const list = [ 
    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    },

    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    },

    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    },

    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    },

    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    },

    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    }
]

export default class Objects extends React.Component {
	render() {
        const Lists = list.map(list => <List list = {list}/>)
		return (
			<BigPapa>
                <Title>{this.props.info.title}</Title>
                <br/>
                <Desc>{this.props.info.titleDesc}</Desc>
                <br/>
                <Categories>{Lists}</Categories>
                <br/>
                <Button href={this.props.info.printLink}>SEE IT IN PRINT</Button>
            </BigPapa>	
		)
	}
}