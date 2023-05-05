import Snake from "./snake.js";
class Game {
  constructor() {
    const canvas = document.querySelector("#game");
    this.ctx = canvas.getContext("2d");
    this.cellSize = 30;
    this.cellCount = canvas.width / this.cellSize;
    this.before = new Date().getTime();

    this.createInterval();
    // console.log(this.ctx)
  }
  play() {
    this.spawnSnake();
  }
  createInterval() {
    this.updateWithForcedContext = this.update.bind(this);
    requestAnimationFrame(this.updateWithForcedContext);
  }
  update() {
    requestAnimationFrame(this.updateWithForcedContext);

    this.now = new Date().getTime();
    const delta = this.now - this.before;
    const interval = 1000 / 4;
    // console.log(delta);
    if (delta > interval) {
      this.before = this.now - (delta % interval);
    } else {
      return;
    }
    const head = { ...this.snake.segments[0] };
    const direction = this.snake.direction;
    // to do for next time
    switch (direction) {
      case "left":
        head.x = head.x - 1;
        if (head.x === 0) {
          head.x = 18;
        }
        break;
      case "right":
        head.x = head.x + 1;
        if (head.x === this.cellCount) {
          head.x = 0;
        }
        break;
      case "up":
        head.y = head.y - 1;
        if (head.y === 0) {
          head.y = 18;
        }
        break;
      case "down":
        head.y = head.y + 1;
        // console.log(this.cellCount);
        if (head.y === this.cellCount) {
          head.y = 0;
        }
        break;
    }

    this.snake.move(head);
    this.ctx.clearRect(0, 0, 540, 540);
    this.snake.render(this.ctx, this.cellSize);

    // console.log("Qui dentro aggiorniamo il sepente e tutto quanto");
  }
  spawnSnake() {
    const ctx = this.ctx;
    const cellSize = this.cellSize;
    const initialLength = 4;
    const headX = 0;
    const headY = 0;
    const tailX = headX + (initialLength - 1);
    const tailY = headY + (initialLength - 1);

    const directions = ["up", "left", "down", "right"];
    this.snake = new Snake(directions[3]);
    this.snake.createSegments(headX, headY, tailX, tailY);
    this.snake.render(ctx, cellSize);
  }
  endGame() {}
  testCanvas() {
    // fill di colore giallo
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(0, 0, 540, 540);
    // fill colore rosa
    this.ctx.fillStyle = "#ff00ff";
    this.ctx.fillRect(0, 0, 270, 270);
    //fill colore azzurro
    this.ctx.fillStyle = "#00ffff";
    this.ctx.fillRect(270, 270, 270, 270);
    //
  }
}

export default Game;
