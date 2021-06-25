import Character from "./Character";

class Monster extends Character {
  constructor(pos) {
    super({
      pos: pos
    });
    this.monsterImg = new Image();
    this.monsterImg.src = 'https://img.itch.zone/aW1nLzIxMzg1ODgucG5n/original/klz%2FW4.png';
  }

  move(){
    // Random moving left to right or top to bottom 

  }

}

export default Monster;