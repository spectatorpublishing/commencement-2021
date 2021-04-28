import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    background-color: #FCFBF7;
    padding: 1rem 2rem;
    margin: 0;
    color: #707070;

    .container {
    position: relative;
    width: 33%;
    }

    .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    }

    .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 85%;
    }

    .container:hover .image {
    opacity: 0.3;
    }

    .container:hover .middle {
    opacity: 1;
    }

    .text {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    font-size: 16px;
    padding: 16px 32px;
    font-family: brandon-grotesque;
    }

    .title {
        font-weight: bold;
    }
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 3.5em;
    font-weight: bold;
`;

const AdsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 2.5rem;
`;

export default class SeniorAds extends React.Component {
    render() {
        return (
            <Wrap id="Senior Ads">
                <Title>Senior Ads</Title>
                <AdsWrap>
                {
                    this.props.ads.map(ad => (
                        <div class="container">
                            <img src={ad.img} alt="Avatar" class="image" />
                            <div class="middle">
                                <div class="text">
                                    <div class="title">{ad.title}</div>
                                    <div class="description">{ad.description}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </AdsWrap>
            </Wrap>
        )
    }
}