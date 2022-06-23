class Player {
  constructor() {
    this.left = 300;
    this.top = 500;
    this.width = 75;
    this.height = 160;
  }

  preload() {
    this.img = loadImage("/images/Formula1.svg");
  }

  drawPlayer() {
    image(this.img, this.left, this.top, this.width, this.height);

    if (keyIsDown(ARROW_UP)) {
      this.top -= 5;
    }
    if (keyIsDown(ARROW_DOWN)) {
      this.top += 5;
    }
    if (keyIsDown(ARROW_RIGHT)) {
      this.left += 5;
    }
    if (keyIsDown(ARROW_LEFT)) {
      this.left -= 5;
    }
  }
}
