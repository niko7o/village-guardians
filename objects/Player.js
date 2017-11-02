function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 32;
  this.height = 32;
  this.img = new Image();
  this.attackAnimation = new Image();
  this.xVel = 1.8;
  this.yVel = 1.8;
  this.direction = 'S';
  this.collide = false;
  this.score = 0;
}

Player.prototype.preload = function() {
  var that = this;
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

  this.img.src = './sprites/down-1.png';
  this.img.onload = function() {
    ctx.drawImage(that.img, that.x, that.y);
  };

  this.attackAnimation.src = './sprites/attack.gif';
  this.attackAnimation.onload = function() {
    ctx.drawImage(that.attackAnimation, that.x, that.y);
  };
};

Player.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y);
};

Player.prototype.attack = function() {
   switch (this.direction) {
    case 'N': // Works well
      ctx.drawImage(this.attackAnimation, this.x, this.y - 32); // image, x, y, width, height
      for(var i = 0; i < monster.army.length; i++){
        if(this.y - 32 <= monster.army[i].y + monster.army[i].height + 5 &&
           this.y - 32 >= monster.army[i].y - 5 &&
           this.x >= monster.army[i].x - 5 &&
           this.x <= monster.army[i].x + monster.army[i].width + 5){
           monster.die(i);
           this.score += 1;
        }
      }
      break;

    case 'W': // Works well
      ctx.drawImage(this.attackAnimation, this.x - 32, this.y);
      for(var i = 0; i < monster.army.length; i++){
        if(this.x - 32 <= monster.army[i].x + monster.army[i].width + 5 &&
           this.x - 32 >= monster.army[i].x - 5 &&
           this.y <= monster.army[i].y + monster.army[i].height + 5 &&
           this.y >= monster.army[i].y - 5){
           monster.die(i);
           this.score += 1;
        }
      }
      break;

    case 'S': // To be revised
      ctx.drawImage(this.attackAnimation, this.x, this.y + 32);
      for(var i = 0; i < monster.army.length; i++){
        if(this.y + 32 <= monster.army[i].y + monster.army[i].height + 5 &&
           this.y + 32 >= monster.army[i].y - 5 &&
           this.x >= monster.army[i].x - 5 &&
           this.x <= monster.army[i].x + monster.army[i].width + 5){
           monster.die(i);
           this.score += 1;
        }
      }
      break;

    case 'E': // To be revised
      ctx.drawImage(this.attackAnimation, this.x + 32, this.y);
      for(var i = 0; i < monster.army.length; i++){
        if(this.x + 32 <= monster.army[i].x + monster.army[i].width + 5 &&
           this.x + 32 >= monster.army[i].x - 5 &&
           this.y <= monster.army[i].y + monster.army[i].height + 5 &&
           this.y >= monster.army[i].y - 5){
           monster.die(i);
           this.score += 1;
        }
      }
      break;
  }
};

Player.prototype.checkMonsterCollision = function() {
  for (var i = 0; i < monster.army.length; i++) {
    if (this.x < monster.army[i].x + monster.army[i].width &&
      this.x + this.width > monster.army[i].x &&
      this.y < monster.army[i].y + monster.army[i].height &&
      this.height + this.y > monster.army[i].y) {
      //console.log('Monster collision @ ' + this.direction);
      return true;
    }
  }
};

Player.prototype.checkWallCollision = function() {
  if (this.x < wall.x + wall.width && // left
    this.x + this.width > wall.x && // right
    this.y < wall.y + wall.height && // top
    this.height + this.y > wall.y) { // bottom
    console.log('Wall crash @ ' + this.direction);
  }
};

Player.prototype.checkBoundaries = function() {
  if(this.x <= 0) this.x = 0;
  if(this.x + this.width >= 640) this.x = 640 - this.width;
  if(this.y <= 0) this.y = 0;
  if(this.y + this.height >= 480) this.y = 480 - this.height;
};

Player.prototype.checkAttackHit = function() {
  if(this.checkMonsterCollision()){
    alert('hit');
  }
};

Player.prototype.moveLeft = function() {
  this.x -= this.xVel;
  this.direction = 'W';
  this.collisions();
  if(this.checkMonsterCollision()) this.x += 2;
};

Player.prototype.moveUp = function() {
  this.y -= this.yVel;
  this.direction = 'N';
  this.collisions();
  if(this.checkMonsterCollision()) this.y += 2;
};

Player.prototype.moveRight = function() {
  this.x += this.xVel;
  this.direction = 'E';
  this.collisions();
  if(this.checkMonsterCollision()) this.x -= 2;
};

Player.prototype.moveDown = function() {
  this.y += this.yVel;
  this.direction = 'S';
  this.collisions();
  if(this.checkMonsterCollision()) this.y -= 2;
  if(this.checkWallCollision()) this.y = this.y;
};

Player.prototype.stayInBounds = function() {
  if(this.x <= 0) this.x = 0;
  if(this.x >= 640) this.x = 640;
  if(this.y <= 0) this.y = 0;
  if(this.y >= 480) this.y = 480;
};

Player.prototype.collisions = function() {
  this.stayInBounds();
  this.checkWallCollision();
  this.checkMonsterCollision();
  this.checkBoundaries();
};
