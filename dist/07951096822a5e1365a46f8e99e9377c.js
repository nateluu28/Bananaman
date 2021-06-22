document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById('board-canvas');
  if (!canvas.getContext){
    console.log('canvas is not supported');
  } 

  canvas.width = 500;
  canvas.height = 500;
  let ctx = canvas.getContext('2d');



  
  // let img = new Image();
  // img.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';
  // img.onload = function() {
  //   init();
  // };



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




})




import Entity from './classes/Entity';

window.Entity = Entity;
let options = { pos: [1,1]}
let e1  = new Entity(options)

key('a', function(){ e1.move([-1, 0]); console.log(e1.pos) });
key('d', function(){ e1.move([1, 0]); console.log(e1.pos) });
key('w', function(){ e1.move([0, -1]); console.log(e1.pos) });
key('s', function(){ e1.move([0, 1]); console.log(e1.pos) });