function Monster(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
       ctx = board.context;
       ctx.fillStyle = color;
       ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}

Monster.prototype.newPos = function(){
  this.x += this.speedX;
  this.y += this.speedY;
}

Monster.prototype.infect = function(){
  console.log(infect);
}

Monster.prototype.move = function(){
  this.x += 5;
}
