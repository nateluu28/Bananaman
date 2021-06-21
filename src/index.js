document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('board-canvas');
  if (!canvas.getContext){
    console.log('canvas is not supported');
  } 

  canvas.width = 500;
  canvas.height = 500;
  let ctx = canvas.getContext('2d');
  const scale = 2;
  const width = 32;
  const height = 32;
  const scaledWidth = scale * width;
  const scaledHeight = scale * height;
  
  let img = new Image();
  img.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';
  img.onload = function() {
    init();
  };


  const drawFrame = (frameX, frameY, canvasX, canvasY) => {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                canvasX, canvasY, scaledWidth, scaledHeight);
}

function init() {
  // drawFrame(0, 0, 0, 0);
  // drawFrame(1, 0, scaledWidth, 0);
  // drawFrame(0, 0, scaledWidth * 2, 0);
  // drawFrame(2, 0, scaledWidth * 3, 0);
  // drawFrame(0, 1, 0, 0);
  // drawFrame(1, 1, scaledWidth, 0);
  // drawFrame(0, 1, scaledWidth * 2, 0);
  // drawFrame(2, 1, scaledWidth * 3, 0);
  // drawFrame(0, 2, 0, 0);
  // drawFrame(1, 2, scaledWidth, 0);
  // drawFrame(0, 2, scaledWidth * 2, 0);
  // drawFrame(2, 2, scaledWidth * 3, 0);
  // drawFrame(0, 3, 0, 0);
  // drawFrame(1, 3, scaledWidth, 0);
  // drawFrame(0, 3, scaledWidth * 2, 0);
  // drawFrame(2, 3, scaledWidth * 3, 0);
  window.requestAnimationFrame(step);

  
}
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 2;

function step() {
  frameCount++;
  if (frameCount < 30) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  
  window.requestAnimationFrame(step);
}




})