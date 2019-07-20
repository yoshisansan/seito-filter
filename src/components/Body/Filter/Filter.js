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

    .changeColor {
        background-color: #ff7152; 
    }
`

export default class Filter extends Component {
    render() {
        console.log(this.props.className)
        return (
            <FlexBtn >
                <button 
                    key={this.props.key}
                    className={this.props.className}
                    onClick={() => this.props.onClick()}
                >
                    {this.props.value}
                </button>
            </FlexBtn>

        ); 
    }
}