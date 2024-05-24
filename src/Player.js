import Projectile from './Projectile.js'

export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 64;
    this.height = 64;
    this.x = 50;
    this.y = 100;
    this.speedX = 1
    this.speedY = 0
    this.maxSpeed = 10
    this.jumpSpeed = 19
    this.grounded = false
    this.projectiles = []
    this.frameX = 0
    this.hp = 3

    const image = new Image()
    image.src = "src/images/karaktaren.png"
    this.image = image
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
    if (this.game.keys.includes('ArrowUp')) {
      this.speedY = -this.maxSpeed;
    } else if (this.game.keys.includes('ArrowDown')) {
      this.speedY = this.maxSpeed;
    } else {
      this.speedY = 0;
    }

    if (this.x <= -20) {
      this.x = this.x + 10
    }
    if (this.x >= 840) {
      this.x = this.x -10
    }
    if (this.y <= -20) {
      this.y = this.y + 10
    }
    if (this.y >= 460) {
      this.y = this.y - 10
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
    // context.fillStyle = '#f00';
    // context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
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