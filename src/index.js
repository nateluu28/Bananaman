import Entity from './classes/Entity';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('board-canvas');
  if (!canvas.getContext){
    console.log('canvas is not supported');
  } 

  canvas.width = 500;
  canvas.height = 500;
  let ctx = canvas.getContext('2d');


// function init() {
//   window.requestAnimationFrame(step);

// }
// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;
// let frameCount = 0;
// let currentDirection = 2;

// function step() {
//   frameCount++;
//   if (frameCount < 30) {
//     window.requestAnimationFrame(step);
//     return;
//   }
//   frameCount = 0;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
//   currentLoopIndex++;
//   if (currentLoopIndex >= cycleLoop.length) {
//     currentLoopIndex = 0;
//   }
  
//   window.requestAnimationFrame(step);
// }
  let options = { pos: [1,1]}
  let e1  = new Entity(options)
  e1.draw(ctx);
  key('a', function(){ e1.move(ctx, [-1, 0], 3); console.log(e1.pos) });
  key('d', function(){ e1.move(ctx, [1, 0], 1); console.log(e1.pos) });
  key('w', function(){ e1.move(ctx, [0, -1], 0); console.log(e1.pos) });
  key('s', function(){ e1.move(ctx, [0, 1], 2); console.log(e1.pos) });




})





