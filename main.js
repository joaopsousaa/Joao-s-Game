const game = new Game();

function setup() {
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("game-zone");
}

function preload() {
  game.preload();
}

function draw() {
  game.play();
}

let startButton = document.getElementById("startButton");
startButton.addEventListener("click", (event) => {
  game.startGame();
});

let restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", (event) => {
  game.gameOver();
  game.restartGame();
});
