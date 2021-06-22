
const SCALE = 2;
class Entity {


  constructor(options) {
    this.pos = options.pos;
    this.height = 32;
    this.width = 32;
    this.scaledWidth = SCALE * this.width;
    this.scaledHeight = SCALE * this.height;
    this.drawFrame = this.drawFrame.bind(this);
  }


  move(direction) {
    this.pos[0] += 32 * direction[0];
    this.pos[1] += 32 * direction[1];
  }

  drawFrame(img, ctx, frameX, frameY, canvasX, canvasY) {
    console.log(ctx);
    ctx.drawImage(img,
                frameX * this.width, frameY * this.height, this.width, this.height,
                canvasX, canvasY, this.scaledWidth, this.scaledHeight);
      // ctx.drawImage(img, 0, 0, 32, 32, 0, 0, 32, 32);

  }

  draw(ctx) {
    let drawFrame = this.drawFrame;

    let img = new Image();
    img.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';

    img.onload = function () {
      drawFrame(img, ctx, 0, 2, 0, 0);// init render

    };
  }

}

export default Entity;