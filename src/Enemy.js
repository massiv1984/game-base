export default class Enemy {
    constructor(game) {
      this.game = game
      this.x = 0
      this.y = 0
      this.speedX = 0
      this.speedY = 0
      this.markedForDeletion = false
      this.grounded = false
    }
    update() {
        //if (this.grounded) {
        //    this.speedY = 0
        //} else {
        //    this.speedY += this.game.gravity
        //}
        this.y += this.speedY      
        this.x += this.speedX
        if (this.x < 0) this.markedForDeletion = true
    }
    
}