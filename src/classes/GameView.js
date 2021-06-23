import Game from './Game';

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    // this.game = game;
    this.tile = new Image();
    this.loaded = false;
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

}


export default GameView;