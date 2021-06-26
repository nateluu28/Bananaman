import Game from './Game';
import Monster from './Monster';

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.tile = new Image();
    this.tile.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';
    this.drawBoard = this.drawBoard.bind(this);
  }

  // ground image
  // this.ctx.drawImage(this.tile, 0 * 64, 3 * 64, 64, 
  //       64,0, 0, 64, 64);
  
  drawBoard() {
    let ctx = this.ctx;
    let tile = this.tile;
    this.tile.onload = function(){
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :
          ctx.drawImage(tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);
        }
      }
    }
    if (this.tile.complete){
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :
          ctx.drawImage(tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);
        }
      }
    }
  }

  populateBoard() {
    this.ctx.clearRect(0, 0, 640, 640);
    this.drawBoard();
    for (let i = 0; i < this.game.monsters.length; i++) {
      let ctx = this.ctx;
      let currMonster = this.game.monsters[i];
      currMonster.monsterImg.onload = function() {
        ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);
      }
      if (currMonster.monsterImg.complete) {
        ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);
      }
    }
  }

}


export default GameView;