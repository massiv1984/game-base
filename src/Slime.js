import Enemy from './Enemy'

export default class Slime extends Enemy {
    constructor(game) {
      super(game)
      this.width = 20
      this.height = 20
      this.x = this.game.width
      this.y = Math.random() * (this.game.height - this.height)
      this.speedX = Math.random() * -1 - 0.5
      this.lives = 2
    }
}