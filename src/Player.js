export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 32;
    this.height = 64;
    this.x = 50;
    this.y = 100;
    this.speedX = 1
    this.speedY = 0
    this.maxSpeed = 10
  }
  update(deltaTime) {
    if (this.game.keys.includes('ArrowUp')) {
      this.speedY = -this.maxSpeed;
    } else if (this.game.keys.includes('ArrowDown')) {
      this.speedY = this.maxSpeed;
    } else {
      this.speedY = 0;
    }
    if (this.game.keys.includes('ArrowLeft')) {
      this.speedX = -this.maxSpeed;
    } else if (this.game.keys.includes('ArrowRight')) {
      this.speedX = this.maxSpeed;
    } else {
      this.speedX = 0;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.fillStyle = '#f00';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}