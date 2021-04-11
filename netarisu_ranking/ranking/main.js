'use strict';

const db = firebase.firestore();

const scores = db.collection('scores');
let players = {};

let test = db.collection("test").doc("test");

test.get().then((doc)=> {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    } 
})
.catch((error) => {
    console.log(error);
});

db.collection('scores').get().then((query) => {
    query.forEach((doc) => {
        let data = doc.data();
        players[`${data.name}`] = data.score;
    });
})
.then(() => {
    allRankingSystem();
})
.catch((err) =>  {
    console.log(err);
});