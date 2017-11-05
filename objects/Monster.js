function Monster(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
  this.width = 32;
  this.height = 32;
  this.img = new Image();
  this.dx = 0;
  this.dy = 0;
  this.army = [];
  this.isHit = false;
}

Monster.prototype.preload = function() {
  var that = this;
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  this.img.src = './sprites/monster.png';
  this.img.onload = function() {
    ctx.drawImage(that.img, that.x, that.y);
  };
};

Monster.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y);
};

Monster.prototype.create = function() {
  this.army.push(new Monster(Math.round(Math.random() * 640, 320)));
};

Monster.prototype.die = function(id) {
  this.army.splice(id, 1);
  var die = new Audio('./audio/die.mp3');
  die.play();
};

Monster.prototype.move = function() {
  this.dx = this.randomDirection(-1, 1);
  this.dy = this.randomDirection(-1, 1);
  this.checkBoundaries();
  this.x += this.dx;
  this.y += this.dy;
};

Monster.prototype.checkBoundaries = function() {
  if (this.x + this.dx > 640 - this.width || this.x + this.dx < 0) this.dx = -this.dx;
  if (this.y + this.dy > 480 - this.height || this.y + this.dy < 0) this.dy = -this.dy;
};

Monster.prototype.randomDirection = function(min, max) {
  return Math.random() * (max - min) + min;
};

Monster.prototype.checkPlayerCollision = function() {};
