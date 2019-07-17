import React, { Component } from 'react';
import styled from 'styled-components';

const FilterButton = styled.div`
    text-align: center;
    display: grid;
    grid-template-column: 1fr;
`

export default class Filter extends Component {
    render() {
        return (
            <FilterButton>
                <button>消費税の増税◎</button>
                <button>消費税の減税✖︎</button>
                <button>憲法の改正◎</button>
                <button>憲法の改正✖️</button>
            </FilterButton>
        ); 
    }
}