//あとで修正
//教育無償化の連続
//文字サイズのレスポンス対応
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

const FilterButton = styled.div`
    // display: inline-flex;
    width: 80vw;
    margin: 0 auto;
    padding: 1.2rem;
    // text-align:center;
`

const BodyContent = styled.div`
    
`

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: [],
            btnStyle: [],
        }
    }

    handleClick(attribute, index) {
        const changeBtnColor = this.state.btnStyle
        //重複したボタンのインデックスなら削除
        const deleteClassIndex = changeBtnColor.findIndex(item => item === index)
        if(deleteClassIndex > -1){
            changeBtnColor.splice(deleteClassIndex, 1)
            this.setState({ btnStyle: changeBtnColor })
        } else {
            changeBtnColor.push(index)
            this.setState({ btnStyle: changeBtnColor})
        }

        const attributes = this.state.filter
        //重複を探して削除
        const deleteIndex = attributes.findIndex(item => item === attribute.join())
        if(deleteIndex > -1){
            attributes.splice(deleteIndex, 1)
            return this.setState({ filter: attributes })
        }        
        attributes.push(attribute.join())
        this.setState({ filter: attributes })
    }

    renderBtn(){
        const btnList = attributeBtn.map((attribute, index, self) => {
            // this.setState({ })
            const getIndex = this.state.btnStyle
            console.log(getIndex, index)
            if(getIndex.indexOf(index) >= 0){
                return (
                    <Filter
                    key={index}
                    className="seitoBtn changeColor"
                    value={Object.values(attribute)}                
                    onClick={() => this.handleClick(Object.keys(attribute), index)}
                />
                )
            }
            return (
                <Filter
                    key={index}
                    className="seitoBtn"
                    value={Object.values(attribute)}                
                    onClick={() => this.handleClick(Object.keys(attribute), index)}
                />
                );
            });
        
        return (
            <FilterButton>{btnList}</FilterButton>
        )
    }

    renderSeito(){
        //this.state.filterの状態に応じて取得する政党リストを抽出する
        const filters = this.state.filter
        console.log('ふぃるた〜', filters)

        const seitoObjAfterFilter = []

        seitoObj.map(seitoList => {
            let trueCount = 0
            const attribute = seitoList.attribute

            filters.map(filter => {
                const filterBool = attribute.findIndex(item => item === filter)
                if(filterBool > -1){trueCount = trueCount + 1}
            })
            if(trueCount == filters.length){
                seitoObjAfterFilter.push(seitoList)
            }
        }) 

        let seitoLists = seitoObjAfterFilter

        if(filters.length == 0){
            seitoLists = seitoObj
        }

        const results = seitoLists.map(seitoList => {
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
        return (
            <BodyContent>
                <Description>
                    <p>忙しい人は消去法で政党を選ぼう！</p>
                    <p>好きなフィルターを選んでね♪</p>
                </Description>
                {this.renderBtn()}
                <Result/>
                {this.renderSeito()}
            </BodyContent>
        );
    }
}