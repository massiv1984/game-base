import Enemy from './Enemy'

export default class Cat extends Enemy {
    constructor(game) {
      super(game)
      this.width = 512
      this.height = 512
      this.x = this.game.width
      this.y = 0
      this.speedX = Math.random() * -0.5 -0.5
      this.lives = 2
      const image = new Image()
      image.src = "src/images/bigcat.png"
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