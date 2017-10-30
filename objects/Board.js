function Board () {
    this.canvas = document.createElement("canvas");
    this.frames = 0;
}

Board.prototype.start = function (){
  this.canvas.width = 640
  this.canvas.height = 480;
  this.context = this.canvas.getContext("2d");
  document.getElementById('game').appendChild(this.canvas);
  this.interval = setInterval(update, 20);
}

Board.prototype.draw = function (){

}

Board.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Board.prototype.stop = function () {
  clearInterval(this.interval);
}
