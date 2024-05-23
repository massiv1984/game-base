export default class Layer {
    constructor(game, image, width, height, speedModifier) {
      this.game = game
      this.image = image
      this.width = width
      this.height = height
      this.speedModifier = speedModifier
      this.x = 0
      this.y = 0
    }
  
    update() {
      if (this.x <= -this.width) {
        this.x = 0
      }
      this.x -= this.game.speed * this.speedModifier
    }
  
    draw(context) {
      if (this.game.debug) {
        // draw box around layer
        context.strokeStyle = 'black'
        context.strokeRect(
          this.x - 1,
          this.y - 1,
          this.width - 1,
          this.height - 1
        )
        // write layer name
        context.font = '12px Arial'
        context.fillText(
          `Layer: ${this.image.src.split('/').pop()}`,
          this.x + 400,
          this.y + 20
        )
      }
      context.drawImage(this.image, this.x, this.y)
      context.drawImage(this.image, this.x + this.width, this.y)
    }
  }