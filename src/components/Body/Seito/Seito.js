import React, { Component } from 'react';
import styled from 'styled-components';

const seitoAttributeList = [
    'taxUp', 
    'taxDown',
    'changeKenpo',
    'protectKenpo',
    'dutySchoolFree',
    'univercityFree',
    'nuclearZero',
    'nuclearGo',
    'keepAmerica',
    'fairAmerica',
    'lgbtOk',
    'NoSecretLaw',
    'nhk',
    'death',
]

const seitoObj = [
    { 
        'name': '自民党',
        'tax': '消費増税の路線。10月に消費税率10%へ引き上げる予定。社会保障と財政健全化に当てる税収とする。',
        'kenpo': '憲法改正。自衛隊の明記や緊急事態の対応などを実現',
        'education': '私立高校の実質無償化。真に経済的支援が必要な子供を対象。',
        'nuclear': '再稼働推進の路線。',
        'lgbt': '具体的な政策案は特になし。',
        'secretLaw': null,
        'america': '日米同盟を強化していく路線。',
        'attribute': ['taxUp', 'changeKenpo','nuclearGo','dutySchoolFree','keepAmerica'],
    },
    { 
        'name': '立憲民主党',
        'tax': '消費増税の反対。10%の増税を凍結。所得税と法人税を見直す',
        'kenpo': '改憲に反対。基本的人権の尊重、平和主義、国民主権という日本国憲法の原則を徹底して守る。',
        'education': '公立小中学校の給食の無償化。国公立大学の授業料は半額程度の引き下げ。',
        'nuclear': '原発ゼロ路線。再稼働も認めない。',
        'lgbt': '同性婚を可能とする法改正を実現。',
        'secretLaw': '共に廃止すべし',
        'america': '日米同盟を維持。辺野古基地の強行反対。',
        'attribute': ['taxDown','protectKenpo','dutySchoolFree','nuclearZero','lgbtOk','NoSecretLaw','keepAmerica'],
    },
    { 
        'name': '国民民主党',
        'tax': '消費増税の反対。景気回復後に行うべき。',
        'kenpo': '改憲に反対。未来へ向けて議論すべし。',
        'education': '幼児教育と保育の完全無償化。給食の無償化',
        'nuclear': '原発再稼働は避難計画や地方の合意があればOK。',
        'lgbt': '同性婚ではなくLGBT差別解消法を制定。',
        'secretLaw': '推進すべし',
        'america': '日米同盟を維持。安保法制を廃止して、領域警備法等を制定。',
        'attribute': ['taxDown','protectKenpo','dutySchoolFree','nuclearGo','keepAmerica'],
    },
    { 
        'name': '公明党',
        'tax': '消費増税の路線。10%へ増税に伴い国会議歳費を10%減らす。',
        'kenpo': '改憲に反対。必要な憲法を追加すべし。',
        'education': '幼児教育の無償化。高校、大学の学費軽減。',
        'nuclear': '原発再稼働の路線。基準を満たしていれば◎',
        'lgbt': '同性婚ではなく理解増進法（仮）の制定を目指す。',
        'secretLaw': null,
        'america': '日米同盟を強化。広範な分野での緊密な協力を通じて平時から緊急事態までの切れ目のない体制を強化し、抑止力・対処力を高めるべき。',
        'attribute': ['taxDown','protectKenpo','dutySchoolFree','nuclearZero','keepAmerica'],
    },
    { 
        'name': '日本共産党',
        'tax': '消費増税の反対。将来的に消費税廃止をめざす。大企業・富裕層優遇を改める税制改革と歳出のムダの一掃と能力に応じた税金で賄う。',
        'kenpo': '改憲に反対。特に９条改憲に反対。',
        'education': '幼児教育・保育、私立高校授業料の無償化。全ての奨学金の無利子化。大学・専門学校の授業料半減',
        'nuclear': '原発ゼロ路線。全ての原発を廃炉に向けて動くべし。',
        'lgbt': '同性婚を認める法改正を進める。',
        'secretLaw': '共に廃止すべし。',
        'america': '安保法制は廃止して対等な日米関係を築くべし。',
        'attribute': ['taxDown','protectKenpo','dutySchoolFree','univercityFree','nuclearZero','lgbtOk','NoSecretLaw','fairAmerica'],
    },
    { 
        'name': '日本維新の会',
        'tax': '消費増税の反対。身を切る改革で無駄カット。',
        'kenpo': '憲法改正の路線。教育無償化・統治機構改革・憲法裁判所設置を取り入れて改憲すべき。',
        'education': '義務教育の他、幼児教育、高校、大学等の教育無償化',
        'nuclear': '原発再稼働の法規制の強化をすべき。',
        'lgbt': '同性婚を認める。（法改正については言及なし）',
        'secretLaw': null,
        'america': '米軍防護の領域を日本周辺に限定すべし。普天間基地の負担は軽減。',
        'attribute': ['taxDown','changeKenpo','dutySchoolFree','univercityFree','nuclearGo','lgbtOk','fairAmerica'],
    },
    { 
        'name': '社民党',
        'tax': '消費増税の反対。富裕層や大企業に優遇の不公平税制の是正を。',
        'kenpo': '憲法改正の路線。自衛隊の位置を明記し、集団的自衛権の不行使の内容で改憲すべし。',
        'education': '給食の無償化。子どもの医療費は国庫負担で無料化。',
        'nuclear': '原発ゼロ路線。再稼働を認めず2050年までに再利用エネルギー１００%へ',
        'lgbt': '同性婚を認める法改正を進める。',
        'secretLaw': '「特定秘密保護法」を即時廃止/「共謀罪」創設規定を含む「改正組織犯罪処罰法」など、立憲主義に反する諸法律を廃止すべし。',
        'america': '日米安保条約を平和友好条約へ。',
        'attribute': ['taxDown','changeKenpo','dutySchoolFree','nuclearZero','lgbtOk','fairAmerica'],
    },
    { 
        'name': 'れいわ新撰組',
        'tax': '消費増税の反対。消費税を廃止すべし',
        'kenpo': null,
        'education': '５５５万人の奨学金の返済チャラ',
        'nuclear': '原発ゼロ路線。火力と自然エネルギーを拡大させ、廃炉技術を世界最先端にすべき。',
        'lgbt': null,
        'secretLaw': '共に見直しすべし。',
        'america': null,
        'attribute': ['taxDown','univercityFree','nuclearZero','NoSecretLaw'],
    },
    { 
        'name': '幸福実現党',
        'tax': '消費増税の反対。５%に引き下げ。',
        'kenpo': '憲法改正の路線。自衛隊を軍と位置付けすべし。',
        'education': '教育無償化の反対。教育の自由化を促進すべき。',
        'nuclear': '原発の再稼働の路線。原発ゼロは無責任。火力エネルギーの燃料の入手が不確定で節電で多くの人が熱中症に。',
        'lgbt': '同性婚の法改正に反対。',
        'secretLaw': null,
        'america': '日米同盟の維持',
        'attribute': ['taxDown','changeKenpo','dutySchoolFree','univercityFree','nuclearGo','fairAmerica'],
    },
    { 
        'name': 'オリーブの木',
        'tax': '消費増税の反対。５%へ減税から将来的に消費税を廃止。',
        'kenpo': '改憲の反対。安倍政権での改憲に反対。',
        'education': null,
        'nuclear': '原発ゼロの路線。原発は即ゼロにすべき。',
        'lgbt': null,
        'secretLaw': null,
        'america': '軍国主義からのからの脱却路線。',
        'attribute': ['taxDown','protectKenpo','nuclearZero','fairAmerica'],
    },
    { 
        'name': '労働者党',
        'tax': null,
        'kenpo': '改憲の路線。天皇制を廃止すべき。',
        'education': null,
        'nuclear': null,
        'lgbt': null,
        'secretLaw': null,
        'america': null,
        'attribute': ['changeKenpo'],
    },
    { 
        'name': 'NHKから国民を守る党',
        'tax': null,
        'kenpo': null,
        'education': null,
        'nuclear': null,
        'lgbt': null,
        'secretLaw': null,
        'america': null,
        'nhk': 'NHK料金の支払い義務などを無くしていく方針',
        'attribute': ['nhk'],
    },
    { 
        'name': '安楽死制度を考える会',
        'tax': null,
        'kenpo': null,
        'education': null,
        'nuclear': null,
        'lgbt': null,
        'secretLaw': null,
        'america': null,
        'death': '安楽死を選択できるようにしていく方針',
        'attribute': ['death'],
    },
]

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

export default class Seito extends Component {
    render() {
        return (
            <SeitoCard>
                <div className="seito">
                    <h3>{seitoObj[0].name}</h3>
                    <div className="seito-content">
                        <p>消費税</p>
                        <li>消費税率10%へ引き上げ予定(10月)。社会保障と財政健全化に当てる税収とする。</li>
                    </div>
                    <div className="seito-content">
                        <p>憲法改正</p>
                        <li>憲法改正の路線。自衛隊の明記や緊急事態の対応などを実現</li>
                    </div>
                    <div className="seito-content">
                        <p>教育無償化</p>
                        <li>私立高校の実質無償化。真に経済的支援が必要な子供を対象。</li>
                    </div>
                    <div className="seito-content">
                        <p>原発</p>
                        <li>再稼働推進の路線。</li>
                    </div>
                    <div className="seito-content">
                        <p>同性婚</p>
                        <li>具体的な政策案は特になし。</li>
                    </div>
                    <div className="seito-content">
                        <p>特定秘密保護法・テロ等準備罪</p>
                        <li>特になし</li>
                    </div>
                    <div className="seito-content">
                        <p>日米同盟</p>
                        <li>日米同盟を強化していく路線。</li>
                    </div>                    
                </div>
                <div className="seito">
                    <h3>{seitoObj[0].name}</h3>
                    <div className="seito-content">
                        <p>消費税</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div className="seito-content">
                        <p>憲法改正</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div className="seito-content">
                        <p>教育無償化</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div className="seito-content">
                        <p>原発</p>
                        <li>原発ゼロ社会</li>
                    </div>
                    <div className="seito-content">
                        <p>同性婚</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div className="seito-content">
                        <p>特定秘密保護法・テロ等準備罪</p>
                        <li>10月に消費税10%</li>
                    </div>
                    <div className="seito-content">
                        <p>日米同盟</p>
                        <li>10月に消費税10%</li>
                    </div>                    
                </div>       
            </SeitoCard>
        );
    }
}