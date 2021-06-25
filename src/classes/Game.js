
import Player from "./Player";
import Bomb from './Bomb';
class Game {
  constructor(player){
    this.player = player,
    this.monsters = [];
  }

  addObjects(obj) {
    if (obj instanceof Bomb){
      this.bomb = obj;
    } else if (obj instanceof Player){
      this.player = obj;
    }
  }

  checkCollisions(){
    const allObject = [this.player, this.bomb];
    if (this.bomb === undefined) return false;
    for (let i = 0; i < allObject.length; i++){
      for (let j = i + 1; j < allObject.length; j++){
        if(allObject[i].isCollided(allObject[j])){
            // Add ur collision here
            return true;
          }
      }
    }
    return false;
  }

}

export default Game;