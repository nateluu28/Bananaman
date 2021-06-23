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
    // console.log(this)
    // this.ctx.fillStyle = (i + j) & 1 ? "#58863B" : "#44672C";
    if (this.tile.complete){
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :
              this.ctx.drawImage(this.tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);
            }
        }
      }
      // this.ctx.drawImage(this.tile, 0 * 64, 3 * 64, 64, 
      //   64, x, y, 64, 64);
    // this.ctx.drawImage(this.tileSrc, j * 64, i * 64, 64, 64);
  }

}
// const drawPieces = (ctx, y, color, step) => {
//   ctx.fillStyle = color;
  
//   for (let i = y; i < 2 * step + y; i += step) {
//     for (let j = step / 2; j < 8 * step; j += step) {
//       ctx.beginPath();
//       ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2);
//       ctx.fill();
//     }
//   }
// };


export default GameView;