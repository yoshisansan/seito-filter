import React, { Component } from 'react';
import styled from 'styled-components';

const SeitoCard = styled.div`

`

export default class Seito extends Component {
    render() {
        return (
            <SeitoCard>
                <div className="seito">
                    <h3>自民党</h3>
                    <div>
                        <p>消費税</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div>
                        <p>憲法改正</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div>
                        <p>教育無償化</p>
                        <li>10月に消費税10%</li>
                    </div>
                </div>
                <div className="seito">
                    <h3>自民党</h3>
                    <div>
                        <p>消費税</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div>
                        <p>憲法改正</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div>
                        <p>教育無償化</p>
                        <li>10月に消費税10%</li>
                    </div>
                </div>
            </SeitoCard>
        );
    }
}