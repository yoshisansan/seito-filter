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
                <button>消費税の増税✖️</button>
                <button>憲法の改正◎</button>
                <button>憲法の改正✖️</button>
                <button>原発再稼働◎</button>
                <button>原発ゼロ社会</button>
                <button>日米同盟の維持・強化◎</button>
                <button>日米同盟からの独立路線</button>
                <button>同性婚の自由化</button>
                <button>特定秘密保護法の廃止</button>
                <button>義務教育の無償化</button>
                <button>大学の無償化</button>
                <button>大学の無償化</button>
                <button>NHK受信料の支払い拒否促進</button>
                <button>安楽死◎</button>
                <button>ベーシックインカム制度</button>
            </FilterButton>
        ); 
    }
}