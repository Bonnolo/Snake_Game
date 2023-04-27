import Snake from "./snake.js";
class Game {
  constructor() {
    const canvas = document.querySelector("#game");
    this.ctx = canvas.getContext("2d");
    this.cellSize = 30;
    this.cellCount = canvas.width / canvas.cellSize;

    // console.log(this.ctx)
  }
  play() {
    this.spawnSnake();
  }
  spawnSnake() {
    const initialLength = 4;
    const headX = 0;
    const headY = 0;
    const tailX = headX + initialLength;
    const tailY = headY + initialLength;

    const directions = ["up", "left", "down", "right"];
    this.snake = new Snake(directions[2]);
  }
  endGame() {}
  testCanvas() {
    // fill di colore giallo
    this.ctx.fillStyle = "#ffff00";
    this.ctx.fillRect(0, 0, 540, 540);
    //
    this.ctx.fillStyle = "#ff00ff";
    this.ctx.fillRect(0, 0, 270, 270);
    //
    this.ctx.fillStyle = "#00ffff";
    this.ctx.fillRect(270, 270, 270, 270);
    //
  }
}

export default Game;
