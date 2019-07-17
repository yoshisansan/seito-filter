import React, { Component } from 'react';
import styled from 'styled-components';

import Filter from './Filter/Filter';
import Result from './Result/Result';
import Seito from './Seito/Seito';

const Description = styled.div`
    text-align: center;
    font-size: 4.5rem;
    padding: 1rem;
    .p {
        padding: 1rem;
    }

`

const BodyContent = styled.div`
`

export default class Body extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <BodyContent>
                <Description>
                    <p>忙しい人は消去法で政党を選ぼう！</p>
                    <p>好きなフィルターを選んでね♪</p>
                </Description>   
                <Filter/>
                <Result/>
                <Seito/>
            </BodyContent>
        );
    }
}