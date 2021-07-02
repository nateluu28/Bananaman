import Character from "./Character";

class Player extends Character {
  constructor(pos) {
    super({pos : pos});
  }
}

export default Player;