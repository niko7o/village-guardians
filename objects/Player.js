function Player(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.score = 0;

    this.draw = function(){
       ctx = board.context;
       this.image = new Image();
       this.image.onload = function() {
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
       }.bind(this);
       this.image.src = imgsrc;
    }
}

Player.prototype.moveUp = function(){
  player.y -= 5;
}

Player.prototype.moveDown = function(){
  player.y += 5;
}

Player.prototype.moveLeft = function(){
  player.x -= 5;
}

Player.prototype.moveRight = function(){
  player.x += 5;
}

Player.prototype.stopped = function(){
  player.speedX = 0;
  player.speedY = 0;
}

Player.prototype.running = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}
