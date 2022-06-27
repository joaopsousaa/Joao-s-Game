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
