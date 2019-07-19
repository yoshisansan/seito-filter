import React, { Component } from 'react';
import styled from 'styled-components';
import { attributeBtn, seitoContents, seitoObj } from './SeitoData';

import Filter from './Filter/Filter';
import Result from './Result/Result';
import Seito from './Seito/Seito';

const Description = styled.div`
    text-align: center;
    font-size: 4.5rem;
    padding: 1rem;
    .p {
        padding: 1rem;
    }

`

const SeitoCard = styled.div`
    width: 90vw;
    max-width: 40rem;
    margin: 0 auto;

    .seito {
        border: solid 0.4rem #ff7152;
        border-radius: 3rem;
        padding: 1rem 2rem 2rem 2rem;
        margin-bottom: 2rem;
    }
    
    .seito h3{
        font-size: 3.5rem;
        margin-bottom: 1rem;
        color: #ff7152;
    }
    .seito p {
        font-size: 2.4rem;
        border-bottom: solid 0.2rem #ff7152;
    }
    .seito li {
        font-size: 1.8rem;        
        margin: 0.7rem 0 1rem 0;
    }

    .seito-content {
        margin-bottom: 2rem;
    }
`

const BodyContent = styled.div`
`

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: [],
        }
    }

    handleClick(attribute) {
        const attributes = this.state.filter
        attributes.push(attribute)
        this.setState({ filter: attributes })

    }

    renderSeito(){
        const results = seitoObj.map(seitoList => {
            const agendas = []
            const attribute = seitoList.attribute
            
            //属性の全リストを扱いやすいように配列へ格納し直す
            const attributeList = []
            for(let i in seitoContents){
                const string = Object.keys(seitoContents[i]).join()
                attributeList.push(string)
            }

            //政党の各属性が属性リストの何番目に格納されているのかインデックスを抽出する
            const attributeIndex = []
            for(let i in attribute){
                const index = attributeList.findIndex(item => item === attribute[i])
                attributeIndex.push(index)
            }

            //属性リストに格納しているアジェンダ情報を取得する
            const getAgendaInfo = []
            for(let i in attributeIndex){
                getAgendaInfo.push(seitoContents[attributeIndex[i]])
            }

            //アジェンダ情報の配列に文章を追加で格納する
            const getAgenda = []
            for(let i in getAgendaInfo){

                const info = Object.values(getAgendaInfo[i])
                const infoAttr = info[0][1]
                const pushInfo = seitoList[infoAttr]

                getAgenda.push([info[0][0], info[0][1], pushInfo])
                
            }


            // for(let i in attribute){
            //     const seitoContentKey = Object.keys(seitoContents[i])
            //     console.log(seitoContentKey)
            //     const seitoContentValue = Object.values(seitoContents[i])
            //     //政党のattributeを取り出してseitContentオブジェクトと一致するものだけ取り出す。説明文章も一緒に。
            //     // console.log(attribute[i], seitoContentKey[0])

            //     if(attribute[i] == seitoContentKey[0]){ 
            //         const description = seitoObj[seitoContentValue[1]]
            //         console.log(description)
            //         const addAgenda = [ seitoContentValue[0], description ]
            //         agendas.push( addAgenda )
            //     }
            // }
            const agendaList = getAgenda.map(agenda => {
                return (
                    <div className="seito-content">
                        <p>{agenda[0]}</p>
                        <li>{agenda[2]}</li>
                    </div>
                );
            })

            return (
                <Seito
                    name={seitoList.name}
                    agenda={agendaList}
                />
            );  
        });
        return (
            <SeitoCard>{results}</SeitoCard>
        );
    }


    render() {

        const btnList = attributeBtn.map((attribute) =>
            <Filter
                value={Object.values(attribute)}
                onClick={() => this.handleClick(Object.keys(attribute))}
            />
      );
        

        return (
            <BodyContent>
                <Description>
                    <p>忙しい人は消去法で政党を選ぼう！</p>
                    <p>好きなフィルターを選んでね♪</p>
                </Description>
                <div className="filterBtn">{btnList}</div>
                <Result/>
                {this.renderSeito()}
            </BodyContent>
        );
    }
}