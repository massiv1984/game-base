import Highscore from "./Highscore"

export default class UserInterface {
    constructor(game) {
      this.game = game
      this.fontSize = 25
      this.fontFamily = 'Arial'
      this.color = 'white'
    }
    draw(context) {
        context.save()
        context.fillStyle = this.color
        //context.shadowOffsetX = 2
        //context.shadowOffsetY = 2
        //context.shadowColor = 'black'
        context.textAlign = 'left'
        context.font = `${this.fontSize}px ${this.fontFamily}`
        context.fillText(
          `Time: ${(this.game.countdown).toFixed(1)}`,
          20,
          100
        )
        context.fillText(
          `Score: ${(this.game.score)}`,
          20,
          50
        )
        context.fillText(
          `Health: ${(this.game.hp)}`,
          20,
          150
        )
        if (this.game.gameOver) {
            context.textAlign = 'center'
            context.font = `50px ${this.fontFamily}`
            context.fillText(
              'Game over',
              this.game.width / 2,
              this.game.height / 2 - 20
            )
            if (this.game.gameOver && this.game.hasname == false){
              let name = prompt ("ENTER YOUR NAME UP TO 3 CHARACTERS")
              console.log(name)
              this.game.name = name
              if (this.game.name !== null && this.game.name !== undefined && 
                typeof(this.game.score) === "number" && 
                this.game.score > 500 &&
               this.game.name.length < 4 && 
                this.game.name.length > 0){
                console.log("namn ", this.name)
                this.game.highscore.postScore(this.game.score)
              }
              
            
            if (this.game.name !== null) {
              alert(`YOUR SCORE: ${this.game.score}

              HIGHSCORE: ${this.game.highscore.highscore} by ${this.game.highscore.name.toUpperCase()}`)
                this.game.hasname = true
            }
          
          }
            // context.fillText(
            //  `Final score: ${(this.game.score)}`,
            //   this.game.width / 2,
            //   this.game.height / 2 + 30
            // )

         // debug
        if (this.game.debug) {
            context.font = `15px Arial`
            context.textAlign = 'right'
            context.fillText(`x: ${this.game.player.x}`, this.game.width - 20, 25)
            context.fillText(`y: ${this.game.player.y}`, this.game.width - 20, 50)
            context.fillText(
              `speedX: ${this.game.player.speedX}`,
              this.game.width - 20,
              75
            )
            context.fillText(
              `speedY: ${this.game.player.speedY}`,
              this.game.width - 20,
              100
            )
            context.fillText(
              `maxSpeed: ${this.game.player.maxSpeed}`,
              this.game.width - 20,
              125
            )
            context.fillText(`keys: ${this.game.keys}`, this.game.width - 20, 150)
        } 
        context.restore()
    }
}

}
