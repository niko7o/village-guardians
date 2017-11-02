function Wall (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.array = [];
}

Wall.prototype.draw = function(x, y, width, height, color) {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
