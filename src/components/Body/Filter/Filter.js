import React, { Component } from 'react';
import styled from 'styled-components';

const FlexBtn = styled.div`

    display: inline-block;

    .seitoBtn {
        
        font-size: 2rem;
        padding: 1rem;
        margin: 1rem;
        border:solid 0.4rem #ff7152;
        border-radius: 1rem;
    }
`

export default class Filter extends Component {
    render() {
        return (
            <FlexBtn>
                <button 
                    className="seitoBtn" 
                    onClick={() => this.props.onClick(this.props.attribute)}
                >
                    {this.props.value}
                </button>
            </FlexBtn>

        ); 
    }
}