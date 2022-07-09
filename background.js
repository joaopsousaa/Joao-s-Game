class Background {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.speed = 10;
  }

  preload() {
    this.img = loadImage("images/Infinite_Road.png");
  }

  drawBackground(isInPowerUpMode) {
    image(this.img, this.left, this.top, CANVAS_WIDTH, CANVAS_HEIGHT);
    image(
      this.img,
      this.left,
      this.top - CANVAS_HEIGHT,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );

    if (this.top >= CANVAS_HEIGHT) {
      this.top = 0;
    }

    let speed = this.speed;

    if (isInPowerUpMode) {
      speed = 45;
    }

    this.top += speed;
  }
}
