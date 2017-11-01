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
    this.direction = 'S';
    this.spritesUp = ['./sprites/up-0.png','./sprites/up-1.png','./sprites/up-2.png','./sprites/up-3.png','./sprites/up-4.png','./sprites/up-5.png',];
    this.spritesLeft = ['./sprites/left-0.png','./sprites/left-1.png','./sprites/left-2.png','./sprites/left-3.png','./sprites/left-4.png','./sprites/left-5.png'];
    this.spritesDown = ['./sprites/down-0.png','./sprites/down-1.png','./sprites/down-2.png','./sprites/down-3.png','./sprites/down-4.png','./sprites/down-5.png'];
    this.spritesRight = ['./sprites/right-0.png','./sprites/right-1.png','./sprites/right-2.png','./sprites/right-3.png','./sprites/right-4.png','./sprites/right-5.png'];

    this.draw = function(){
       this.image = new Image();
       ctx = board.context;
       this.image.onload = function() {
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
       }.bind(this);
       this.image.src = imgsrc;
    }
}

Player.prototype.attack = function(){
  //this.image.src = this.sprites[0]; attack sprite
}

Player.prototype.moveUp = function(){
  this.x += this.velX;
  this.y += this.velY;
  if (this.velY > -this.maxSpeed) {
      this.velY--;
  }
}

Player.prototype.moveDown = function(){
  this.x += this.velX;
  this.y += this.velY;
  if (this.velY < this.maxSpeed) {
      this.velY++;
  }
}

Player.prototype.moveLeft = function(){
  this.x += this.velX;
  this.y += this.velY;
  if (this.velX > -this.maxSpeed) {
      this.velX--;
  }
}

Player.prototype.moveRight = function(){
  this.x += this.velX;
  this.y += this.velY;
  if (this.velX < this.maxSpeed) {
      this.velX++;
  }
}

Player.prototype.stopped = function(){
  // add a stopped guardian sprite
  this.velX = 0;
  this.velY = 0;
}
