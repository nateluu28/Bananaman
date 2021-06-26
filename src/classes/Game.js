
import Player from "./Player";
import Bomb from './Bomb';
import Monster from "./Monster";
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
    } else if (obj instanceof Monster){
      this.monsters.push(obj);
    }
  }

  checkCollisions(){
    if (this.bomb === undefined) return false;
    if(this.bomb && this.bomb.shards.length !== 0){
      debugger;
      for (let i = 0; i < this.monsters.length; i++){
        for (let j = 0; j < this.bomb.shards.length; j++){
          if(this.monsters[i].isCollidedWithShard(this.bomb.shards[j])) {
            this.monsters = this.monsters.splice(i, 1);
            // Remove the monster from the index
            debugger
          }

        }
      }
      // debugger
    }
  }
}

export default Game;