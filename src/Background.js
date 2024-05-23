import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    const sky = new Image()
    sky.src = "src/images/background2.png"
    this.skyLayer = new Layer(this.game, sky, 1708, 500, 0.2)
    const middle = new Image()
    middle.src = "src/images/Trees.png"
    this.middleLayer = new Layer(this.game, middle, 1708, 500, 0.4)
    const foreground = new Image()
    foreground.src = "src/images/Water.png"
    this.foregroundLayer = new Layer(this.game, foreground, 1708, 500, 0.8)
    this.layers = [
      this.skyLayer,
      this.middleLayer,
      this.foregroundLayer,
    ]
  }

  update() {
    this.layers.forEach((layer) => layer.update())
  }

  draw(context) {
    this.layers.forEach((layer) => layer.draw(context))
  }
}