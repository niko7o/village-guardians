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
  // add an up moving guardian sprite
  this.speedY = -1.8;
}

Player.prototype.moveDown = function(){
  // add a down moving guardian sprite
  this.speedY = 1.8;
}

Player.prototype.moveLeft = function(){
  // add a left moving guardian sprite
  this.speedX = -1.8;
}

Player.prototype.moveRight = function(){
  // add a right moving guardian sprite
  this.speedX = 1.8;
}

Player.prototype.stopped = function(){
  // add a stopped guardian sprite
  this.speedX = 0;
  this.speedY = 0;
}

Player.prototype.running = function(){
  // add a running guardian sprite
  this.x += this.speedX;
  this.y += this.speedY;
}
