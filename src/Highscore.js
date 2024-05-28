export default class Highscore {
    constructor(game) {
      this.game = game
      this.highscore
      this.url = "https://selective-petite-inspiration.glitch.me"

  
  
    }
  
    async testApi() {
      try {
          const response = await fetch('https://selective-petite-inspiration.glitch.me');
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          //console.log(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }
  
    fetch(options) {
      return this.limiter.schedule(() => fetch(this.url, options))
    }
  
  
  
    postScore(score) {
      //console.log("skicka score")
  
      const data = { score, name:this.game.name }
      console.log(score)
      fetch(`${this.url}/score`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode:"cors"
      })
        .then((response) => response.text())
        .then((text) => {
          console.log(text)
  
        })
  
  
    }
  
    async getScore() {
      //console.log("hämta hiscore med jens kod")
  
      await fetch(`${this.url}/score`)
        .then((response) => response.json())
        .then((text) => {
          this.highscore = text[0].score
          this.name = text[0].name
          //console.log(this.highscore)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  
  
  
  
    testApi() {
  
      fetch(this.url)
        .then((response) => response.text())
        .then((text) => {
          //console.log(text)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  
  
  
  
  
  
  
  }  