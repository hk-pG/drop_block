"use strict";

init();

if (gameStart === true) {
  drawAll();
  drawNext();
  setInterval(dropBlock, dropSpeed);
} else {
  // ゲーム開始前の表示をする
}
