import React, { Component } from 'react';
import styled from 'styled-components';

const Twitter = styled.div`
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4rem;

    button{
        background-color: #00acee;
        border-radius: 1rem;
        padding: 1.3rem 2rem;
        color: white;
    }
`
export default class Hader extends Component {
    render() {
        const twitterText = "地球ヲ、宇宙猫デ支配セヨ... ＃宇宙猫";
        // const twitterLink = `https://twitter.com/share?url=${getTweet}&text=${twitterText}`;
        // const url = firebase
        // target=”_blank”

        return (
            <Twitter><button>Twitterでシェアする</button></Twitter>
        );
        
    }
}
