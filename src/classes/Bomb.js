import Character from "./Character";

class Bomb extends Character {
  constructor(pos) {
    super({
      pos: pos
    });
    this.explosionImg = new Image();
    this.explosionImg.src = 'https://i.redd.it/ent0tfm3abv01.png';
    this.shards = [];
  }

  explode(ctx){
    if (this.explosionImg.complete){
      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1], 64, 64);
      
      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0] - 64, this.pos[1], 64, 64);
      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0] + 64, this.pos[1], 64, 64);
      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1] - 64, 64, 64);
      ctx.drawImage(this.explosionImg, 2 * 48, 0 * 48, 48, 48, this.pos[0], this.pos[1] + 64, 64, 64);

    }
  }
  createShards() {
    this.shards = [
      [this.pos[0], this.pos[1]],
      [this.pos[0] + 64, this.pos[1]],
      [this.pos[0] - 64, this.pos[1]],
      [this.pos[0], this.pos[1] + 64],
      [this.pos[0], this.pos[1] + 64],
    ];
  }

}

export default Bomb;