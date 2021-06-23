import Game from './Game';

const ROWS = 7;
const COLS = 7;
const board = [];


class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    // this.game = game;
  }

  renderBoard () {

  }
  /* background-color: #58863B; */
  /* #44672C */

  drawBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.ctx.fillStyle = (i + j) & 1 ? "#58863B" : "#44672C";
        this.ctx.fillRect(j * 64, i * 64, 64, 64);
      }
    }
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