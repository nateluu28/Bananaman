/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Bomb.js":
/*!*****************************!*\
  !*** ./src/classes/Bomb.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/classes/Character.js\");\n\n\nclass Bomb extends _Character__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(pos) {\n    super({\n      pos: pos\n    });\n    this.explosionImg = new Image();\n    this.explosionImg.src = 'https://i.redd.it/ent0tfm3abv01.png';\n    this.shards = [];\n  }\n\n  explode(ctx){\n    if (this.explosionImg.complete){\n      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1], 64, 64);\n      \n      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0] - 64, this.pos[1], 64, 64);\n      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0] + 64, this.pos[1], 64, 64);\n      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1] - 64, 64, 64);\n      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1] + 64, 64, 64);\n\n    }\n  }\n  createShards() {\n    this.shards = [\n      [this.pos[0], this.pos[1]],\n      [this.pos[0] + 64, this.pos[1]],\n      [this.pos[0] - 64, this.pos[1]],\n      [this.pos[0], this.pos[1] + 64],\n      [this.pos[0], this.pos[1] + 64],\n    ];\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bomb);\n\n//# sourceURL=webpack://bananaman/./src/classes/Bomb.js?");

/***/ }),

/***/ "./src/classes/Character.js":
/*!**********************************!*\
  !*** ./src/classes/Character.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Character {\n  constructor(options){\n    this.pos = options.pos;\n  }\n\n  isCollidedWithShard(otherChar){\n    // debugger;\n    if (\n      (Math.abs(this.pos[0] * 64 - otherChar[0]) < 64)\n      && (Math.abs(this.pos[1] * 64 - otherChar[1]) < 64)\n    ) {\n      // debugger;\n      return true;\n    }\n    // debugger;\n    return false;\n  }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n//# sourceURL=webpack://bananaman/./src/classes/Character.js?");

/***/ }),

/***/ "./src/classes/Game.js":
/*!*****************************!*\
  !*** ./src/classes/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bomb */ \"./src/classes/Bomb.js\");\n/* harmony import */ var _Monster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Monster */ \"./src/classes/Monster.js\");\n\n\n\n\nclass Game {\n  constructor(player){\n    this.player = player,\n    this.monsters = [];\n  }\n\n  addObjects(obj) {\n    if (obj instanceof _Bomb__WEBPACK_IMPORTED_MODULE_1__.default){\n      this.bomb = obj;\n    } else if (obj instanceof _Player__WEBPACK_IMPORTED_MODULE_0__.default){\n      this.player = obj;\n    } else if (obj instanceof _Monster__WEBPACK_IMPORTED_MODULE_2__.default){\n      this.monsters.push(obj);\n    }\n  }\n\n  checkCollisions(){\n    if (this.bomb === undefined) return false;\n    if (this.monsters.length === 0) return false;\n    if(this.bomb && this.bomb.shards.length !== 0){\n      for (let i = 0; i < this.monsters.length; i++){\n        for (let j = 0; j < this.bomb.shards.length; j++){\n          if(this.monsters[i].isCollidedWithShard(this.bomb.shards[j])) {\n            this.monsters.splice(i, 1);\n            return;\n          }\n\n        }\n      }\n      // debugger\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://bananaman/./src/classes/Game.js?");

/***/ }),

/***/ "./src/classes/GameView.js":
/*!*********************************!*\
  !*** ./src/classes/GameView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/classes/Game.js\");\n/* harmony import */ var _Monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Monster */ \"./src/classes/Monster.js\");\n\n\n\nclass GameView {\n  constructor(ctx, game) {\n    this.ctx = ctx;\n    this.game = game;\n    this.tile = new Image();\n    this.tile.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';\n    this.drawBoard = this.drawBoard.bind(this);\n  }\n\n  // ground image\n  // this.ctx.drawImage(this.tile, 0 * 64, 3 * 64, 64, \n  //       64,0, 0, 64, 64);\n  \n  drawBoard() {\n    let ctx = this.ctx;\n    let tile = this.tile;\n    this.tile.onload = function(){\n      for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n          // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :\n          ctx.drawImage(tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);\n        }\n      }\n    }\n    if (this.tile.complete){\n      for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n          // (i + j) & 1 ? this.ctx.drawImage(this.tile, 0 * 64, 0 * 64, 64, 64, i * 64, j * 64, 64, 64) :\n          ctx.drawImage(tile, 0 * 64, 2 * 64, 64, 64, i * 64, j * 64, 64, 64);\n        }\n      }\n    }\n  }\n\n  populateBoard() {\n    this.ctx.clearRect(0, 0, 640, 640);\n    this.drawBoard();\n    for (let i = 0; i < this.game.monsters.length; i++) {\n      let ctx = this.ctx;\n      let currMonster = this.game.monsters[i];\n      currMonster.monsterImg.onload = function() {\n        ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);\n      }\n      if (currMonster.monsterImg.complete) {\n        ctx.drawImage(currMonster.monsterImg, 0 * 64, 0 * 64, 64, 64, currMonster.pos[0] * 64, currMonster.pos[1] * 64, 64, 64);\n      }\n    }\n  }\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://bananaman/./src/classes/GameView.js?");

/***/ }),

/***/ "./src/classes/Monster.js":
/*!********************************!*\
  !*** ./src/classes/Monster.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/classes/Character.js\");\n\n\nclass Monster extends _Character__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(pos) {\n    super({\n      pos: pos\n    });\n    this.monsterImg = new Image();\n    this.monsterImg.src = 'https://img.itch.zone/aW1nLzIxMzg1ODgucG5n/original/klz%2FW4.png';\n  }\n\n  move(){\n    // Random moving left to right or top to bottom \n\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Monster);\n\n//# sourceURL=webpack://bananaman/./src/classes/Monster.js?");

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/classes/Character.js\");\n\n\nclass Player extends _Character__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(pos) {\n    super({pos : pos});\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://bananaman/./src/classes/Player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game */ \"./src/classes/Game.js\");\n/* harmony import */ var _classes_GameView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/GameView */ \"./src/classes/GameView.js\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_Bomb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Bomb */ \"./src/classes/Bomb.js\");\n/* harmony import */ var _util_canvas_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/canvas_util */ \"./src/util/canvas_util.js\");\n/* harmony import */ var _classes_Monster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/Monster */ \"./src/classes/Monster.js\");\n\n\n\n\n\n\n\n\nconst SCALE = 2;\nconst WIDTH = 32;\nconst HEIGHT = 32;\nconst SCALED_WIDTH = SCALE * WIDTH;\nconst SCALED_HEIGHT = SCALE * HEIGHT;\n\nconst CYCLE_LOOP = [0, 1, 0, 2];\nconst FACING_DOWN = 2;\nconst FACING_UP = 0;\nconst FACING_LEFT = 3;\nconst FACING_RIGHT = 1;\nconst FRAME_LIMIT = 12;\nconst MOVEMENT_SPEED = 2;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playButton = document.getElementsByClassName(\"start\")[0];\n  const goBack = document.getElementsByClassName(\"goBack\")[0];\n  const scoreboard = document.getElementsByClassName(\"scoreboard\")[0];\n  const instructionsBtn = document.getElementsByClassName(\"instructionsBtn\")[0];\n  const instructionsContainer = document.getElementsByClassName(\"instructions\")[0];\n\n  const gameMenu = document.getElementsByClassName(\"game-menu\")[0];\n\n\n  playButton.addEventListener('click', () => {\n    gameMenu.classList.add('hidden');\n    scoreboard.classList.remove('hidden');\n  });\n\n  instructionsBtn.addEventListener('click', () => {\n    instructionsContainer.classList.remove('hidden');\n  });\n\n  goBack.addEventListener('click', () => {\n    instructionsContainer.classList.add('hidden');\n  });\n\n\n  let canvas = document.getElementById('board-canvas');\n  let ctx = canvas.getContext('2d');\n\n  let bgCanvas = document.getElementById('bg-canvas');\n  let ctxBg = bgCanvas.getContext('2d');\n\n  canvas.width = 640;\n  canvas.height = 640;\n  bgCanvas.width = 640;\n  bgCanvas.height = 640;\n  let keyObj = {};\n  let currentDirection = FACING_DOWN;\n  let curLoopI = 0;\n  let frameCount = 0;\n  let posX = 0;\n  let posY = 0;\n  let playerImg = new Image();\n  let bombImg = new Image();\n  let bombX = 0;\n  let bombY = 0;\n  let tileImg = new Image();\n  var bombPressed = false;\n  var explosion = false;\n\n  loadImage();\n  let player = new _classes_Player__WEBPACK_IMPORTED_MODULE_2__.default([0,0]);\n  let monster1 = new _classes_Monster__WEBPACK_IMPORTED_MODULE_5__.default([1,2]);\n  let monster2 = new _classes_Monster__WEBPACK_IMPORTED_MODULE_5__.default([4,5]);\n  let monster3 = new _classes_Monster__WEBPACK_IMPORTED_MODULE_5__.default([7,8]);\n\n  let game = new _classes_Game__WEBPACK_IMPORTED_MODULE_0__.default(player);\n  let gameView = new _classes_GameView__WEBPACK_IMPORTED_MODULE_1__.default(ctxBg, game);\n  gameView.drawBoard();\n  game.addObjects(monster1);\n  game.addObjects(monster2);\n  game.addObjects(monster3);\n  gameView.populateBoard();\n  window.addEventListener('keydown', handleKeyDown);\n  window.addEventListener('keyup', handleKeyUp);\n\n  function loadImage() {\n    playerImg.src = 'https://tcrf.net/images/e/e9/NeoEarlyBomberman.gif';\n    playerImg.onload = function () {\n      window.requestAnimationFrame(gameLoop);\n    };\n\n    bombImg.src = 'https://data.whicdn.com/images/27491025/original.png';\n    tileImg.src = 'https://media.moddb.com/images/games/1/32/31122/master-tileset.png';\n  }\n  // Event listeners that will handle key presses of movement.\n  function handleKeyDown(e) {\n    keyObj[e.key] = true;\n  }\n\n  function handleKeyUp(e) {\n    keyObj[e.key] = false;\n  }\n\n\n  function findNearestTile(pos) {\n    return (Math.floor((pos + 2) / 64)) * 64;\n  }\n\n  async function initBomb(bomb, gameView, game) {\n    await sleep(2000);\n    explosion = true;\n    await sleep(1000);\n    bomb.createShards();\n    bombPressed = false;\n    explosion = false;\n    console.log(bomb);\n    game.checkCollisions();\n    gameView.populateBoard();\n  }\n\n  function sleep(ms){\n    return new Promise((accept) => {\n      setTimeout(() => {\n        accept();\n      }, ms);\n    })\n  }\n\n\n  function gameLoop() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    let hasMoved = false;\n\n    if (keyObj.w) {\n      movePlayer(0, -MOVEMENT_SPEED, FACING_UP);\n      hasMoved = true;\n    } else if (keyObj.s) {\n      movePlayer(0, MOVEMENT_SPEED, FACING_DOWN);\n      hasMoved = true;\n    }\n\n    if (keyObj.a) {\n      movePlayer(-MOVEMENT_SPEED, 0, FACING_LEFT);\n      hasMoved = true;\n    } else if (keyObj.d) {\n      movePlayer(MOVEMENT_SPEED, 0, FACING_RIGHT);\n      hasMoved = true;\n    }\n\n    if (keyObj[' '] && !bombPressed) {\n      bombPressed = true;\n      bombX = findNearestTile(posX);\n      bombY = findNearestTile(posY);\n\n      var bomb = new _classes_Bomb__WEBPACK_IMPORTED_MODULE_3__.default([bombX, bombY]);\n      game.addObjects(bomb);\n\n      initBomb(bomb, gameView, game);\n    }\n\n\n\n    if (hasMoved) {\n      frameCount++;\n      if (frameCount >= FRAME_LIMIT) {\n        frameCount = 0;\n        curLoopI++;\n        if (curLoopI >= CYCLE_LOOP.length) {\n          curLoopI = 0;\n        }\n      }\n    }\n\n    if (!hasMoved) {\n      curLoopI = 0;\n    }\n\n    if (explosion) {\n      game.bomb.explode(ctx);\n    }\n\n    if (bombPressed && !explosion) {\n      var moveBomb = setInterval(function () {\n        bombX = bombX % 2 ? bombX += 1 : bombX -= 1;\n        bombY = bombY % 2 ? bombY += 1 : bombY -= 1;\n      }, 500);\n      ctx.drawImage(bombImg, bombX, bombY, SCALED_WIDTH, SCALED_HEIGHT);\n    }\n\n    (0,_util_canvas_util__WEBPACK_IMPORTED_MODULE_4__.drawFrame)(ctx, playerImg, CYCLE_LOOP[curLoopI], currentDirection, posX, posY);\n    window.requestAnimationFrame(gameLoop);\n  }\n\n  function movePlayer(deltaX, deltaY, direction) {\n    if (posX + deltaX > 0 && posX + SCALED_WIDTH + deltaX < canvas.width) {\n      posX += deltaX;\n      player.pos[0] = posX;\n    }\n    if (posY + deltaY > 0 && posY + SCALED_HEIGHT + deltaY < canvas.height) {\n      posY += deltaY;\n      player.pos[1] = posY;\n    }\n    currentDirection = direction;\n  }\n\n});\n\n//# sourceURL=webpack://bananaman/./src/index.js?");

/***/ }),

/***/ "./src/util/canvas_util.js":
/*!*********************************!*\
  !*** ./src/util/canvas_util.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawFrame\": () => (/* binding */ drawFrame)\n/* harmony export */ });\nconst SCALE = 2;\nconst WIDTH = 32;\nconst HEIGHT = 32;\nconst SCALED_WIDTH = SCALE * WIDTH;\nconst SCALED_HEIGHT = SCALE * HEIGHT;\n\n\nfunction drawFrame(ctx, img, frameX, frameY, canvasX, canvasY) {\n    ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, \n                  HEIGHT,canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n  }\n\n\n\n//# sourceURL=webpack://bananaman/./src/util/canvas_util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;