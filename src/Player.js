import Projectile from './Projectile.js'

export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.x = 50;
    this.y = 100;
    this.speedX = 1
    this.speedY = 0
    this.maxSpeed = 20
    this.jumpSpeed = 20
    this.grounded = false
    this.projectiles = []
    this.frameX = 0
  }
  update(deltaTime) {
    //if (this.game.keys.includes('ArrowUp')) {
    //  this.speedY = -this.maxSpeed;
    //} else if (this.game.keys.includes('ArrowDown')) {
    //  this.speedY = this.maxSpeed;
    //} else {
    //  this.speedY = 0;
    //}
    if (this.game.keys.includes('ArrowLeft')) {
      this.speedX = -this.maxSpeed;
    } else if (this.game.keys.includes('ArrowRight')) {
      this.speedX = this.maxSpeed;
    } else {
      this.speedX = 0;
    }
    if (this.game.keys.includes('ArrowUp') && this.grounded) {
      this.speedY = -this.jumpSpeed
      this.grounded = false
    }
    if (this.grounded) {
      this.speedY = 0
    } else {
      this.speedY += this.game.gravity
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.projectiles.forEach((projectile) => {
      projectile.update()
    })
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion
    )
  }
  draw(context) {
    context.fillStyle = '#f00';
    context.fillRect(this.x, this.y, this.width, this.height);
    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    })
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'black'
      context.font = '12px Arial'
      context.fillText(this.frameX, this.x, this.y - 5)
    }
  }
  shoot() {
    this.projectiles.push(
      new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
    )
  }
}