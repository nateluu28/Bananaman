import Game from './Game';
import Monster from './Monster';

class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.tile = new Image();
    this.loaded = false;
    this.monsters = [];
  }
  
  // ground image
  // this.ctx.drawImage(this.tile, 0 * 64, 3 * 64, 64, 
  //       64,0, 0, 64, 64);
  
  drawBoard() {
    this.tile.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';
    if (this.tile.complete){
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :
          this.ctx.drawImage(this.tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);
        }
      }
    }
  }

  populateBoard() {
    let monsterSpawns = [[1,2], [4,5], [7,8]];
    for (let i = 0; i < monsterSpawns.length; i++){
      let newMonster = new Monster(monsterSpawns[i]);
      this.ctx.drawImage(newMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, newMonster.pos[0] * 64, newMonster.pos[1] * 64, 64, 64);
      this.monsters.push(newMonster);
    }
  }

}


export default GameView;