import React, { Component } from 'react';
import styled from 'styled-components';

const FilterButton = styled.div`

`

export default class Filter extends Component {
    render() {
        return (
                <button>{this.props.value}
                </button>

        ); 
    }
}