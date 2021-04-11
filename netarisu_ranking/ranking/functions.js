'use strict';
const allRankingSystem = () => {
    const playerNames = Object.keys(players);

    // ソート後のプレイヤーの名前（playersのキー）を格納
    let ranking = [];

    // console.log(`players is ${players}`);

    // ソート処理
    playerNames.forEach((name) => {
        ranking.push(name);
    });

    for(let i = 0; i < ranking.length - 1; i++) {
        for(let j = i + 1; j < ranking.length; j++) {
            if (players[`${ranking[i]}`] < players[`${ranking[j]}`]) {
                let tmp = ranking[i];
                ranking[i] = ranking[j];
                ranking[j] = tmp;
            }
        }
    }

    //******************表示に関する記述 ************************

     const rankingList = document.getElementById('rankingList');
    const topThree = [
        null,
        'gold',
        'silver',
        'blonze',
    ];
    for (let i = 1; i < ranking.length + 1; i ++) {
        //ランキングデータの準備
        const section = document.createElement('section');
        const name = document.createElement('div')
        const rank = document.createElement('div');
        const score = document.createElement('div');
        name.innerText = ranking[i - 1];
        rank.innerText = `第${i}位`;
        score.innerText = `score : ${players[ranking[i - 1]]} P`;
        //上位者の背景色を変える
        if (i === 1 || i === 2 || i === 3) {
            section.classList.add(topThree[i]);
        }

        //各データにクラスを付与する
        rank.classList.add('rank');
        name.classList.add('name');
        score.classList.add('score');
        //データをセクション要素の子要素として挿入する
        rankingList.appendChild(section);
        section.appendChild(rank);
        section.appendChild(name);
        section.appendChild(score);
    }

    setTimeout(() => {
        document.location.reload();
    }, 15000);
}
