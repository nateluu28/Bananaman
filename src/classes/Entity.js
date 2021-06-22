class Entity {
  constructor(options){
    this.pos = options.pos;
  }

  move(direction) {
    this.pos[0] += 32 * direction[0];
    this.pos[1] += 32 * direction[1];
  }


}

export default Entity;