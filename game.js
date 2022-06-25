class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacleArr = [];
  }

  preload() {
    this.background.preload();
    this.player.preload();
    // this.obstacle.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    // if (frameCount % 50 === 0) {
    //   this.obstacleArr.push(new Obstacle());
    // }

    // this.obstacleArr = this.obstacleArr.filter((obstacle) => {
    //   obstacle.drawObstacle();

    //   if (this.isColliding(this.player, obstacle)) {
    //     this.gameOver();
    //   }

    //   return obstacle.top <= CANVAS_HEIGHT;
    // });
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

  gameOver() {
    this.background.speed = 0;
    this.obstacle.top = 0;
  }
}
