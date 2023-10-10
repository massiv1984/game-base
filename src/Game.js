import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new Player(this)
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)
  }

  draw(context) {
    this.player.draw(context)
    this.ui.draw(context)
  }
}
