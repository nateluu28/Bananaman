
const SCALE = 2;
class Entity {


  constructor(options) {
    this.pos = options.pos;
    this.height = 32;
    this.width = 32;
    this.scaledWidth = SCALE * this.width;
    this.scaledHeight = SCALE * this.height;
    this.key_dir = 2;

    this.draw = this.draw.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
  }
  /*
    Direction 0 = UP
              1 = RIGHT
              2 = DOWN 
              3 = LEFT

   */

  move(ctx, direction, key_dir) {
    this.pos[0] += 32 * direction[0];
    this.pos[1] += 32 * direction[1];
    this.key_dir = key_dir;
    this.draw(ctx);
  }

  drawFrame(img, ctx, frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
                frameX * this.width, frameY * this.height, this.width, this.height,
                canvasX, canvasY, this.scaledWidth, this.scaledHeight);
  }

  draw(ctx) {
    let drawFrame = this.drawFrame;
    let pos = this.pos;
    let key_dir = this.key_dir;

    let img = new Image();
    img.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';

    img.onload = function () {
      // drawFrame(img, ctx, 0, 2, pos[0], pos[1]);// init render
      drawFrame(img, ctx, 0, key_dir, pos[0], pos[1]);

    };
  }

}

export default Entity;