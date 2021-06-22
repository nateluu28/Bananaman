const SCALE = 1;
const WIDTH = 32;
const HEIGHT = 32;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_DOWN = 2;
const FACING_UP = 0;
const FACING_LEFT = 3;
const FACING_RIGHT = 1;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 1;


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('board-canvas');
  let ctx = canvas.getContext('2d');
  let keyObj = {};
  let currentDirection = FACING_DOWN;
  let currentLoopIndex = 0;
  let frameCount = 0;
  let posX = 0;
  let posY = 0;
  let playerImg = new Image();
  let bombImg = new Image();
  let bombPressed = false;
  let bombX = 0;
  let bombY = 0;


  loadImage();
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  function loadImage() {
    playerImg.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';
    playerImg.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };

    bombImg.src = 'https://data.whicdn.com/images/27491025/original.png';
  }  
// Event listeners that will handle key presses of movement.
  function handleKeyDown(e) {
      keyObj[e.key] = true;
  }

  function handleKeyUp(e) {
      keyObj[e.key] = false;
  }

  function drawFrame(img, frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
                  frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                  canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  }


  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;

    if (keyObj.w) {
      movePlayer(0, -MOVEMENT_SPEED, FACING_UP);
      hasMoved = true;
    } else if (keyObj.s) {
      movePlayer(0, MOVEMENT_SPEED, FACING_DOWN);
      hasMoved = true;
    }

    if (keyObj.a) {
      movePlayer(-MOVEMENT_SPEED, 0, FACING_LEFT);
      hasMoved = true;
    } else if (keyObj.d) {
      movePlayer(MOVEMENT_SPEED, 0, FACING_RIGHT);
      hasMoved = true;
    }

    if (keyObj[' '] && !bombPressed){
      console.log('space');
      bombPressed = true;
      bombX = posX;
      bombY = posY;
      setInterval(function() { bombPressed = false; }, 1000);
    }

    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        currentLoopIndex++;
        if (currentLoopIndex >= CYCLE_LOOP.length) {
          currentLoopIndex = 0;
        }
      }
    }

    if (!hasMoved) {
      currentLoopIndex = 0;
    }
    if (bombPressed){
      ctx.drawImage(bombImg, bombX, bombY, SCALED_WIDTH, SCALED_HEIGHT);
    }


    drawFrame(playerImg, CYCLE_LOOP[currentLoopIndex], currentDirection, posX, posY);
    window.requestAnimationFrame(gameLoop);
  }

  function movePlayer(deltaX, deltaY, direction) {
    if (posX + deltaX > 0 && posX + SCALED_WIDTH + deltaX < canvas.width) {
      posX += deltaX;
    }
    if (posY + deltaY > 0 && posY + SCALED_HEIGHT + deltaY < canvas.height) {
      posY += deltaY;
    }
    currentDirection = direction;
  }

});
