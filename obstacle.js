class Obstacle {
  constructor(img) {
    this.left = random(10, CANVAS_WIDTH - 100);
    this.height = 120;
    this.top = -105;
    this.width = 70;
    this.img = img;
    this.speed = 9.5;
  }

  drawObstacle(isInPowerUpMode) {
    image(this.img, this.left, this.top, this.width, this.height);

    let speed = this.speed;

    if (isInPowerUpMode) {
      speed = 12;
    }

    this.top += speed;
  }
}
