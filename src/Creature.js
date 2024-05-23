import Enemy from './Enemy'

export default class Creature extends Enemy {
    constructor(game) {
      super(game)
      this.width = 200
      this.height = 200
      this.x = this.game.width
      this.y = Math.random() * (this.game.height - this.height)
      this.speedX = Math.random() * -1
      this.lives = 2
      const image = new Image()
      image.src = "src/images/katter.png"
      this.image = image
    }
    draw(context) {
        // context.fillStyle = 'black'
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        // context.fillRect(this.x, this.y, this.width, this.height)
  
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.fillStyle = 'black'
            context.font = '20px Arial'
            context.fillText(this.lives, this.x, this.y - 5)
            context.font = '12px Arial'
            context.fillText(`x: ${this.x.toFixed()}`, this.x + 20, this.y - 5)
            context.fillText(`y: ${this.y.toFixed()}`, this.x + 20, this.y - 20)
        }
    }
}