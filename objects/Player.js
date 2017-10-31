function Player(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.velX = 0;
    this.velY = 0;
    this.score = 0;
    this.maxSpeed = 2;
    this.friction = 0.75;

    this.draw = function(){
       this.image = new Image();
       ctx = board.context;
       this.image.onload = function() {
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
       }.bind(this);
       this.image.src = imgsrc;
       this.x += this.velX;
       this.y += this.velY;
    }
}

Player.prototype.moveUp = function(){
  if (this.velY > -this.maxSpeed) {
      this.velY--;
  }
}

Player.prototype.moveDown = function(){
  if (this.velY < this.maxSpeed) {
      this.velY++;
  }
}

Player.prototype.moveLeft = function(){
  if (this.velX > -this.maxSpeed) {
      this.velX--;
  }
}

Player.prototype.moveRight = function(){
  if (this.velX < this.maxSpeed) {
      this.velX++;
  }
}

Player.prototype.stopped = function(){
  // add a stopped guardian sprite
  this.velX = 0;
  this.velY = 0;
}
