class Character {
  constructor(options){
    this.pos = options.pos;
  }

  isCollided(otherChar){
    if (
      (Math.abs(this.pos[0] - otherChar.pos[0]) < 64)
      && (Math.abs(this.pos[1] - otherChar.pos[1]) < 64)
    ) {
      return true;
    }
    return false;
  }


}

export default Character;