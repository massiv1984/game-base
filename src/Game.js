import Slime from './Slime.js'
import Creature from './Creature.js'
import Cat from './Cat.js'
import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Background from './Background.js'
import Highscore from './Highscore.js'
// import Platform from './Platform.js'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)
    this.background = new Background(this)
    this.keys = []
    this.gameOver = false
    this.gameTime = 0
    this.score = 0
    this.gravity = 1
    this.debug = false
    this.player = new Player(this)
    this.hp = this.player.hp
    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 0.000000000001
    this.enemyTimer2 = 0
    this.enemyInterval2 = 4200
    this.enemyTimer3 = 0
    this.enemyInterval3 = 42000
    this.hasname = false
    // this.ground = this.height - 100
//    this.platforms = [
//      new Platform(this, 0, this.ground, this.width, 100),
//      new Platform(this, this.width - 200, 280, 200, 20),
//      new Platform(this, 200, 200, 300, 20),
//    ]
// yo
    this.speed = 1
    this.highscore = new Highscore(this)
    this.highscore.getScore()
    this.name
  }

  update(deltaTime) {
    this.countdown = 150 - this.gameTime * 0.001
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    if (this.hp <= 0) {
      this.gameOver = true
    }
    if (this.countdown <= 0) {
      this.gameOver = true
    }
    this.background.update()
    // this.background.layers[3].update()

    this.player.update(deltaTime)

    // this.platforms.forEach((platform) => {
    //  if (this.checkPlatformCollision(this.player, platform)) {
    //    this.player.speedY = 0
    //    this.player.y = platform.y - this.player.height
    //    this.player.grounded = true
    //  }
    //  this.enemies.forEach((enemy) => {
    //    if (this.checkPlatformCollision(enemy, platform)) {
    //      enemy.speedY = 0
    //      enemy.y = platform.y - enemy.height
    //    }
    //  }
    // )
   // }
 // )

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }
    if (this.enemyTimer2 > this.enemyInterval2 && !this.gameOver) {
      this.addEnemy2()
      this.enemyTimer2 = 0
    } else {
      this.enemyTimer2 += deltaTime
    }
    if (this.enemyTimer3 > this.enemyInterval3 && !this.gameOver) {
      this.addEnemy3()
      this.enemyTimer3 = 0
    } else {
      this.enemyTimer3 += deltaTime
    }

    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime)
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true
        this.score += enemy.score
        this.hp -= enemy.damage
      }
      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.hp -= 1
        if (enemy.hp <= 0) {
          enemy.markedForDeletion = true
          this.score += enemy.score
        } else {
          projectile.markedForDeletion = true
        }
        }
        
      })
    })
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
  }

  draw(context) {
    this.background.draw(context)
    this.ui.draw(context)
    this.player.draw(context)
    // this.platforms.forEach((platform) => platform.draw(context))
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

  addEnemy() {
    this.enemies.push(new Slime(this))
  }

  addEnemy2() {
    this.enemies.push(new Creature(this))
  }

  addEnemy3() {
    this.enemies.push(new Cat(this))
  }

  checkCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    )
  }
  // checkPlatformCollision(object, platform) {
  //  if (
  //    object.y + object.height >= platform.y &&
  //    object.y < platform.y &&
  //    object.x + object.width >= platform.x &&
  //    object.x <= platform.x + platform.width
  //  ) {
  //    if (object.grounded && object.y + object.height > platform.y) {
  //      object.speedY = 0
  //      object.y = platform.y - object.height
  //      object.grounded = true
  //    }
  //    return true
  //  } else {
  //    if (object.grounded && object.y + object.height < platform.y) {
  //      object.grounded = false
  //    }
  //    return false
  //  }
 // }
}
