class Obstacle {
  constructor(img) {
    this.left = random(0, CANVAS_WIDTH - 100);
    this.height = 100;
    this.top = -105;
    this.width = 100;
    this.img = img;
  }

  drawObstacle() {
    image(this.img, this.left, this.top, this.width, this.height);

    this.top += 10;
  }
}
