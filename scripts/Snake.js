class Snake {
  constructor(direction) {
    this.segments = [];
    this.direction = direction;
  }
  createSegments(minX, minY, maxX, maxY) {
    switch (this.direction) {
      case "left":
        for (let i = minX; i <= maxX; i++) {
          this.segments.push({ x: i, y: minY });
        }
        break;
      case "right":
        for (let i = maxX; i >= minX; i--) {
          this.segments.push({ x: i, y: minY });
        }
        break;
      case "up":
        for (let i = minY; i <= maxY; i++) {
          this.segments.push({ x: minX, y: i });
        }
        break;
      case "down":
        for (let i = maxY; i >= minY; i--) {
          this.segments.push({ x: minX, y: i });
        }
        break;
    }
  }
  render(ctx, cellSize) {
    this.segments.forEach((segment, index) => {
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
    });
  }
  move(head) {
    this.segments.pop();
    this.segments.unshift(head);
  }
}
export default Snake;
