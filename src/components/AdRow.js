import React from 'react';
import styled from 'styled-components';

const AdRow = styled.div`
    background: ${props => props.theme.cream};
    padding-bottom: 5rem;
    text-align: center;
`;

const Image = styled.img`
    width: 60vw;

    @media only screen and (max-width: 500px){
        width: 90vw;
    }
`;

const Ad2 = styled.div`
    display: none;
    @media only screen and (max-width: 992px){
        display: block;
        margin-top: 2rem;
    }
`;

export default class SeniorAds extends React.Component {
    render() {
        return (
            <AdRow>
                <Image src="https://commencement2021.s3.amazonaws.com/final_am_studies_dept.png" alt="American Studies Advertisement" />
                <Ad2>
                    <Image src="https://commencement2021.s3.amazonaws.com/TelAviv_ad.png" alt="Sackelr School of Medicine Ad" />
                </Ad2>
            </AdRow>
        )
    }
}