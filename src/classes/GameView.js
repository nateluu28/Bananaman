import Game from './Game';
import Monster from './Monster';

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.tile = new Image();
    this.drawBoard = this.drawBoard.bind(this);
  }

  // ground image
  // this.ctx.drawImage(this.tile, 0 * 64, 3 * 64, 64, 
  //       64,0, 0, 64, 64);
  
  drawBoard() {
    this.tile.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';
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
  }

  populateBoard() {
    debugger
    this.ctx.clearRect(0, 0, 640, 640);
    this.drawBoard();
    debugger
    for (let i = 0; i < this.game.monsters.length; i++) {
      let ctx = this.ctx;
      let currMonster = this.game.monsters[i];
      currMonster.monsterImg.onload = function() {
        ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);
      }
      debugger;
      ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);
    }
  }

}


export default GameView;