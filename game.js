class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacleArr = [];
  }

  preload() {
    this.background.preload();
    this.player.preload();
    obstacleImg = loadImage("/images/Formula1.svg");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    if (frameCount % 50 === 0) {
      this.obstacleArr.push(new Obstacle(obstacleImg));
    }

    this.obstacleArr = this.obstacleArr.filter((obstacle) => {
      obstacle.drawObstacle();

      if (this.isColliding(this.player, obstacle)) {
        this.gameOver();
      }

      return obstacle.top <= CANVAS_HEIGHT;
    });

    this.startGame();
  }

  isColliding(player, obstacle) {
    //A is the player
    //B is the obstacle
    const bottomOfA = player.top + player.height;
    const topOfB = obstacle.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;
    const topOfA = player.top;
    const bottomOfB = obstacle.height + obstacle.top;
    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;
    const leftOfA = player.left;
    const rightOfB = obstacle.left + obstacle.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;
    const rightOfA = player.width + player.left;
    const leftOfB = obstacle.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;
    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }
  startGame() {
    let gameIntro = document.getElementById("game-intro");
    let gameCanvas = document.getElementById("game-zone");
    gameIntro.style.display = "none";
    gameCanvas.style.display = "block";
  }

  // toggleScreen(id, toggle) {
  //   let element = document.getElementById(id);
  //   if (toggle === false) {
  //     let display = "none";
  //   }
  //   display = "block";
  //   element.style.display = display;
  // }

  // gameOver() {
  //   noLoop();
  // }
}
