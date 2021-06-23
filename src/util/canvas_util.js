const SCALE = 2;
const WIDTH = 32;
const HEIGHT = 32;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;


export function drawFrame(ctx, img, frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, 
                  HEIGHT,canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  }

