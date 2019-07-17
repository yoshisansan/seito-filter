import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.div`
    text-align: center;
    background-color: #ff7152;
    line-height: 8rem;
    .title {
        color: white;
        font-size: 6rem;
    }
`

export default class Hader extends Component {
    render() {
        return (
            <HeaderTitle><h1 className='title'>政党ふぃるた〜</h1></HeaderTitle>
        );
        
    }
}