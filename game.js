class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacleArr = [];
    this.powerUpArr = [];
    this.chronometer = new Chronometer();
  }

  preload() {
    this.background.preload();
    this.player.preload();
    obstacleImg = loadImage("images/Formula1.svg");
    powerUpImg = loadImage("images/NOS.PNG");
  }

  superMomentum() {
    if (this.intervalId) {
      return;
    }
    this.isPowerUpOn = true;
    this.intervalId = setTimeout(() => {
      this.intervalId = null;
      this.isPowerUpOn = false;
    }, 10 * 1000);
  }

  play() {
    if (!this.hasStarted) {
      return;
    }

    this.background.drawBackground();
    this.player.drawPlayer();

    if (frameCount % 500 === 0) {
      this.powerUpArr.push(new PowerUp(powerUpImg));
    }
    this.powerUpArr = this.powerUpArr.filter((powerUp) => {
      powerUp.drawPowerUp();
      if (this.isColliding(this.player, powerUp)) {
        powerUp.top = CANVAS_HEIGHT;
        score += 10;
        this.chronometer.remove10Seconds();
        this.superMomentum();
      }
      return powerUp.top <= CANVAS_HEIGHT;
    });

    if (frameCount % 50 === 0) {
      this.obstacleArr.push(new Obstacle(obstacleImg));
    }

    this.obstacleArr = this.obstacleArr.filter((obstacle) => {
      obstacle.drawObstacle(this.isPowerUpOn);

      if (this.isColliding(this.player, obstacle)) {
        this.gameOver();
      } else if (obstacle.top >= CANVAS_HEIGHT) {
        score++;
      }
      return obstacle.top <= CANVAS_HEIGHT;
    });

    scoreEl.innerHTML = score;
  }

  startGame() {
    this.hasStarted = true;
    this.chronometer.startTimer();
    this.toggleScreen("game-intro", false);
    this.toggleScreen("game-zone", true);
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

  toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    if (toggle === false) {
      return (element.className = "off-screen");
    }
    return (element.className = "on-screen");
  }

  gameOver() {
    noLoop();
    this.toggleScreen("game-intro", false);
    this.toggleScreen("game-zone", false);
    this.toggleScreen("game-over", true);
  }
}
