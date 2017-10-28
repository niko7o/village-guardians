function Player(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.score = 0;
    this.update = function(){
       ctx = board.context;
       this.image = new Image();
       this.image.onload = function() {
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
       }.bind(this);
       this.image.src = imgsrc;
    }
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
  player.speedY -= 1;
}

Player.prototype.moveDown = function(){
  player.speedY += 1;
}

Player.prototype.moveLeft = function(){
  player.speedX -= 1;
}

Player.prototype.moveRight = function(){
  player.speedX += 1;
}

Player.prototype.stopMove = function(){
  player.speedX = 0;
  player.speedY = 0;
}

Player.prototype.newPos = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}

Player.prototype.left = function(){ return this.x }

Player.prototype.right = function(){  return this.x + this.width  }

Player.prototype.top = function(){  return this.y }

Player.prototype.bottom = function(){ return this.y + this.height }

Player.prototype.crashWith = function(obstacle){
  return !((this.bottom() < obstacle.top())    ||
           (this.top()    > obstacle.bottom()) ||
           (this.right()  < obstacle.left())   ||
           (this.left()   > obstacle.right()))
}
