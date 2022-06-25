class Background {
  constructor() {
    this.left = 0;
    this.top = 0;
    this.speed = 4;
  }

  preload() {
    this.img = loadImage("images/Infinite_Road.png");
  }

  drawBackground() {
    image(this.img, this.left, this.top, CANVAS_WIDTH, CANVAS_HEIGHT);
    image(
      this.img,
      this.left,
      this.top - CANVAS_HEIGHT,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );

    this.top += this.speed;

    if (this.top >= CANVAS_HEIGHT) {
      this.top = 0;
    }
  }
}
