"use strict";

//背景画像
const bgImgContainer = document.getElementById("bg-img-container");

bgImgContainer.style.minHeight = "100vh";

const backgroundImage = [
  "./sakura.jpg",
  "https://www.pakutaso.com/shared/img/thumb/TSU1994052_TP_V.jpg",
  "https://www.pakutaso.com/shared/img/thumb/pakusky458A8762_TP_V.jpg",
  "https://www.pakutaso.com/shared/img/thumb/007ELA201029A_TP_V.jpg",
  "https://cdn.pixabay.com/photo/2016/05/05/18/24/winter-1374504_1280.jpg",
  "https://www.pakutaso.com/shared/img/thumb/osakekowai458A0290_TP_V.jpg",
  "https://www.pakutaso.com/shared/img/thumb/kamameshiPAR50519_TP_V.jpg",
];

bgImgContainer.style.backgroundImage = `url(${
  backgroundImage[getRandomNum(0, backgroundImage.length - 1)]
})`;
