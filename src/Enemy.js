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
    update(deltaTime) {
        //if (this.grounded) {
        //    this.speedY = 0
        //} else {
        //    this.speedY += this.game.gravity
        //}
        this.y += this.speedY      
        this.x += this.speedX
        if (this.x < 0) this.markedForDeletion = true
                // sprite animation update
if (this.timer > this.interval) {
    this.frameX++
    this.timer = 0
  } else {
    this.timer += deltaTime
  }

  // reset frameX when it reaches maxFrame
  if (this.frameX >= this.maxFrame) {
    this.frameX = 0
  }

  if (this.game.gameOver == true) {
    this.markedForDeletion = true
  }
    }
    
}