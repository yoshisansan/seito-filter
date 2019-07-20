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
    }
    a{
        color: white;
        font-size: 2rem;
        text-decoration: none;

    }
`
export default class Hader extends Component {
    render() {
        const twitterText = "忙しい人は消去法で選んで政党に投票！「政党ふぃるた〜」";
        const TweetUrl = 'https://filter-seito.firebaseapp.com/'
        const twitterLink = `https://twitter.com/share?url=${TweetUrl}&text=${twitterText}`;
        
        

        return (
            <Twitter><button><a href={twitterLink} target="_blank">Twitterでシェアする</a></button></Twitter>
        );
        
    }
}
