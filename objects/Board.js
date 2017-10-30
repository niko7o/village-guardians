function Board (width, height) {
    this.canvas = document.createElement("canvas");
    this.width = width;
    this.height = height;
}

Board.prototype.start = function (){
  this.canvas.width = 640
  this.canvas.height = 480;
  this.context = this.canvas.getContext("2d");
  document.getElementById('game').appendChild(this.canvas);

  // This may have to be in our game.js rather than canvas
  this.interval = setInterval(update, 1000 / 50);
  // requestAnimationFrame(update);
}

Board.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Board.prototype.stop = function () {
  clearInterval(this.interval);
}
