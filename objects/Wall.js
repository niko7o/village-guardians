function Wall (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Wall.prototype.create = function(x, y, width, height, color) {
  board.context.fillStyle = color;
  board.context.fillRect(x, y, width, height);
}
