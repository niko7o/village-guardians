function Monster(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.life = 2;
    this.monsterArmy = [];

    this.draw = function(){
      ctx = board.context;
      this.image = new Image();
      this.image.onload = function() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }.bind(this);
      this.image.src = imgsrc;
   }
}

Monster.prototype.appear = function(){
  // give random x and y coordinates
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

Monster.prototype.createArmy = function(){
  for(var i = 0; i < 3; i++){
    monsterArmy.push(monster);
  }
}
