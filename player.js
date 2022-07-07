class Player {
  constructor() {
    this.left = 300;
    this.top = 500;
    this.width = 70;
    this.height = 120;
  }

  preload() {
    this.img = loadImage("/images/Player.svg");
  }

  drawPlayer() {
    image(this.img, this.left, this.top, this.width, this.height);

    if (keyIsDown(ARROW_UP)) {
      if (this.top > 0) {
        this.top -= 7;
      }
    }
    if (keyIsDown(ARROW_DOWN)) {
      if (this.top + this.height < CANVAS_HEIGHT) {
        this.top += 7;
      }
    }
    if (keyIsDown(ARROW_RIGHT)) {
      if (this.left + this.width < CANVAS_WIDTH - 15) {
        this.left += 7;
      }
    }
    if (keyIsDown(ARROW_LEFT)) {
      if (this.left > 15) {
        this.left -= 7;
      }
    }
  }
}
