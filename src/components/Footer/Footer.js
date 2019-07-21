import React, { Component } from 'react';
import styled from 'styled-components';

const FooterSeito = styled.footer`
    background-color: #ff7152;
    width: 100vw;
    height: 20rem;
    position: relative;

    .description{
    position: absolute;
    bottom: 2rem;
    }
    li, a{
        font-size: 1.8rem;
    }
    li {
        margin-left: 2rem;  
        color: white;
        padding: 0.2rem 0;
    }
    a {
        color: blue;
    }
`

export default class Footer extends Component {
    render() {
        return (
            <FooterSeito>
                <div class="description">
                    <li>Copyrights © Twitterアカウント <a href="https://twitter.com/akifumiyoshimu">@akifumiyoshimu</a></li>
                    <li>「移動を暮らしに」をテーマにしたブログ <a href="https://basho.world">basho.world</a></li>
                </div>
            </FooterSeito>
        );
    }
}