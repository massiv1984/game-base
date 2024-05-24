import Enemy from './Enemy'

export default class Creature extends Enemy {
    constructor(game) {
      super(game)
      this.width = 128
      this.height = 128
      this.x = this.game.width
      this.y = Math.random() * (this.game.height - this.height)
      this.speedX = Math.random() * -4 - 7
      this.speedY = Math.random() * 2 - Math.random() * 2
      this.lives = 2
      const image = new Image()
      image.src = "src/images/katter.png"
      this.image = image
      this.frameX = 0
      this.frameY = 0
      this.maxFrame = 3
      this.fps = 20
      this.timer = 0
      this.interval = 1000 / this.fps
  
      // flip sprite direction
      this.flip = false
      this.hp = 3
      this.damage = 1
      this.score = 100
    }


    draw(context) {
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
          }
        // context.fillStyle = 'black'
        context.drawImage(
            //this.image, this.x, this.y, this.width, this.height
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height)

            context.restore()
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