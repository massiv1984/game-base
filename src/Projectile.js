export default class Projectile {
    constructor(game, x, y) {
        this.game = game
        this.width = 4
        this.height = 4
        this.x = x
        this.y = y
    
        this.speedX = 3
        this.speedY = Math.random() * 5 - Math.random() * 5
        this.damage = 1
        this.markedForDeletion = false
    }
    update() {
        this.x += this.speedX
        if (this.x > this.game.width) {
          this.markedForDeletion = true
        }
        this.y += this.speedY
        if (this.y > this.game.width) {
            this.markedForDeletion = true
        }
    }
    draw(context) {
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}