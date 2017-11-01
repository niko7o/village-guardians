function Monster(width, height, imgsrc, x, y, id) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.life = 2;
    this.moving = false;
    this.army = [];

    this.draw = function(){
      this.image = new Image();
      ctx = board.context;
      this.image.onload = function() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }.bind(this);
      this.image.src = imgsrc;
   }
}

Monster.prototype.create = function(){
  this.army.push(new Monster(32, 28, './images/monster.png', random(480), random(350), 1));
}

Monster.prototype.infect = function(){
  console.log('infecting village');
}

Monster.prototype.move = function(){
    this.y += 2;

    if(monster.x <= 32) monster.x = 32;
    if(monster.x >= board.width - 80) monster.x = board.width - 80;
    if(monster.y <= 32) monster.y = 32;
    if(monster.y >= board.height - 64) monster.y = board.height - 64;
}
