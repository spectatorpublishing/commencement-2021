import React from 'react';
import styled from 'styled-components';
import List from './list.js';


const BigPapa = styled.div`
    display: flex; 
    flex-direction: column;
`

const Title = styled.div`
    text-transform: capitalize;
    font-size: 5em;
`

const Categories = styled.div`
    display: grid;
    font-size: 1.2em;
`

const Button = styled.div`
    background-color: rgb(117,116,113);
    border-radius: 25px;
    text-transform: capitalize;
    color: rgb(217,217,209);
    display: flex; 
    align-content: center;
    justify-content: center; 
`

const list = [ 
    {name: "Person Named",
    description: "CC '19"
    },

    {name: "Less Important",
    description: "BC '19"
    }
]

const info = [
    {title: "SENIOR PROFILES",
    titleDesc: "Across the four undergraduate schools, the class of 2018 boasts exceptional leaders, thinkers, athletes, and artists. Here is a selectino of the graduating seniors who have made a lasting impact on the campus community.",
    printLink: "https://files-cardinalatwork-stanford-edu.s3-us-west-2.amazonaws.com/s3fs-public/styles/9-col-banner/public/feb_2019_uhr_rwc_article_istock-952726174.png?itok=74InHOIl"
    }
]

export default class Card extends React.Component {
    render(){
        const Lists = list.map(list => <List list = {list}/>)
        return(
            <BigPapa>
                <Title >
                    {info.title}
                    <Desc>{info.titleDesc}</Desc>
                </Title>
                <Categories>{Lists}</Categories>
                <Button href={info.printLink}>SEE IT IN PRINT</Button>
            </BigPapa>
        )
    }
}
export default Card;



