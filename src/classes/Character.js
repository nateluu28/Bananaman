class Character {
  constructor(options){
    this.pos = options.pos;
  }

  isCollidedWithShard(otherChar){
    // debugger;
    if (
      (Math.abs(this.pos[0] * 64 - otherChar[0]) < 64)
      && (Math.abs(this.pos[1] * 64 - otherChar[1]) < 64)
    ) {
      // debugger;
      return true;
    }
    // debugger;
    return false;
  }


}

export default Character;