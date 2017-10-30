function Monster(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.draw = function(){
       ctx = board.context;
       ctx.fillStyle = color;
       ctx.fillRect(this.randomX, this.randomY, this.width, this.height);
   }
}

Monster.prototype.appear = function(){
  // give random x and y coordinates
}

Monster.prototype.moving = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}

Monster.prototype.infect = function(){
  console.log('infecting village');
}

Monster.prototype.move = function(){
  // Moving randomly
  setTimeout(function(){
    this.x += 5;
  }, 2000)
  setTimeout(function(){
    this.y -= 5;
  }, 2000)
}
