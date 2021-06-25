import Game from './classes/Game';
import GameView from './classes/GameView';
import Player from './classes/Player';
import Bomb from './classes/Bomb';
import {
  drawFrame
} from './util/canvas_util';


const SCALE = 2;
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
const MOVEMENT_SPEED = 2;


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('board-canvas');
  let ctx = canvas.getContext('2d');

  let bgCanvas = document.getElementById('bg-canvas');
  let ctxBg = bgCanvas.getContext('2d');

  canvas.width = 640;
  canvas.height = 640;
  bgCanvas.width = 640;
  bgCanvas.height = 640;
  let keyObj = {};
  let currentDirection = FACING_DOWN;
  let curLoopI = 0;
  let frameCount = 0;
  let posX = 0;
  let posY = 0;
  let playerImg = new Image();
  let bombImg = new Image();
  let bombPressed = false;
  let bombX = 0;
  let bombY = 0;
  let tileImg = new Image();
  let explosion = false;

  loadImage();
  let player = new Player([0,0]);
  let game = new Game(player);
  let gameView = new GameView(ctxBg, game);
  gameView.drawBoard();
  gameView.populateBoard();
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  function loadImage() {
    playerImg.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';
    playerImg.onload = function () {
      window.requestAnimationFrame(gameLoop);
    };

    bombImg.src = 'https://data.whicdn.com/images/27491025/original.png';
    tileImg.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';
  }
  // Event listeners that will handle key presses of movement.
  function handleKeyDown(e) {
    keyObj[e.key] = true;
  }

  function handleKeyUp(e) {
    keyObj[e.key] = false;
  }


  function findNearestTile(pos) {
    return (Math.floor((pos + 2) / 64)) * 64;
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

    if (keyObj[' '] && !bombPressed) {
      bombPressed = true;
      bombX = findNearestTile(posX);
      bombY = findNearestTile(posY);


      // Add bomb to the game engine
      var bomb = new Bomb([bombX, bombY]);
      game.addObjects(bomb);
      setTimeout(function () {
        explosion = true;
        clearInterval(moveBomb);
        setTimeout((function () {
          bombPressed = false;
          explosion = false;
        }), 1000);
      }, 2000);
    }

    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        curLoopI++;
        if (curLoopI >= CYCLE_LOOP.length) {
          curLoopI = 0;
        }
      }
    }

    if (!hasMoved) {
      curLoopI = 0;
    }

    if (explosion) {
      game.bomb.explode(ctx);
    }

    if (bombPressed && !explosion) {
      var moveBomb = setInterval(function () {
        bombX = bombX % 2 ? bombX += 1 : bombX -= 1;
        bombY = bombY % 2 ? bombY += 1 : bombY -= 1;
      }, 500);
      ctx.drawImage(bombImg, bombX, bombY, SCALED_WIDTH, SCALED_HEIGHT);
    }

    drawFrame(ctx, playerImg, CYCLE_LOOP[curLoopI], currentDirection, posX, posY);

    game.checkCollisions();
    window.requestAnimationFrame(gameLoop);
  }

  function movePlayer(deltaX, deltaY, direction) {
    if (posX + deltaX > 0 && posX + SCALED_WIDTH + deltaX < canvas.width) {
      posX += deltaX;
      player.pos[0] = posX;
    }
    if (posY + deltaY > 0 && posY + SCALED_HEIGHT + deltaY < canvas.height) {
      posY += deltaY;
      player.pos[1] = posY;
    }
    currentDirection = direction;
  }

});