class PowerUp {
  constructor(img) {
    this.left = random(0, CANVAS_WIDTH - 100);
    this.height = 50;
    this.top = -105;
    this.width = 60;
    this.img = img;
    this.speed = 4;
  }

  drawPowerUp() {
    image(this.img, this.left, this.top, this.width, this.height);

    this.top += this.speed;
  }
}
