import React, { Component } from 'react';
import styled from 'styled-components';

const ResultFilter = styled.div`
    text-align: center;
    font-size: 4rem;
    width: 90vw;
    margin: 0 auto;
    li{
        margin-bottom: 2rem;
    }
    span{
        font-size: 6rem;
        color: #ff7152;
        
        @media only screen and (max-width: 415px) {
            font-size: 4rem;
        }

    }

    @media only screen and (max-width: 415px) {
        font-size: 3.2rem;
    }        
`

export default class Result extends Component {
    render() {
        return (
            <ResultFilter>
            <li><span>{this.props.msg1}件</span>{this.props.msg2}</li>
            </ResultFilter>
        );
    }
}