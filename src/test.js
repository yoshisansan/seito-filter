const seitoContents = [
    //seitoObjのattributeの中身と一致していたら中身を取り出す
    {'taxUp': ['消費税', 'tax']},
    {'taxDown': ['消費税', 'tax']},
    {'changeKenpo': ['憲法改正', 'kenpo']},
    {'protectKenpo': ['憲法改正', 'kenpo']},
    {'dutySchoolFree': ['教育無償化', 'education']},
    {'univercityFree': ['教育無償化', 'education']},
    {'nuclearZero': ['原発', 'nuclear']},
    {'nuclearGo': ['原発', 'nuclear']},
    {'keepAmerica': ['日米同盟', 'america']},
    {'fairAmerica': ['日米同盟', 'america']},
    {'lgbtOk': ['同性婚の自由化', 'lgbt']},
    {'NoSecretLaw': ['特定秘密保護法', 'secretLaw']},
    {'nhk': ['NHK受信料の支払い拒否促進', 'nhk']},
    {'death': ['安楽死制度', 'death']},
    {'basicIncome': ['ベーシックインカム制度の導入', 'basicIncome']}
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
]
let lists = [];
let index = [];
for(let i in seitoContents){ 
    const chara = Object.keys(seitoContents[i]).join()
    lists.push(chara)
} 

for(i in seitoObj[0]['attribute']){
    const test = lists.findIndex(item => item === seitoObj[0]['attribute'][i] )
    index.push(test)
}
    

console.log(lists)
console.log(index)