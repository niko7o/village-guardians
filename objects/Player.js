function Player(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 1.4;
    this.score = 0;
    this.direction = 'E';
    this.collide = false;
    this.image = new Image();
    this.attackImage = new Image();

    this.spritesUp = ['./sprites/up-0.png','./sprites/up-1.png','./sprites/up-2.png','./sprites/up-3.png','./sprites/up-4.png','./sprites/up-5.png',];
    this.spritesLeft = ['./sprites/left-0.png','./sprites/left-1.png','./sprites/left-2.png','./sprites/left-3.png','./sprites/left-4.png','./sprites/left-5.png'];
    this.spritesDown = ['./sprites/down-0.png','./sprites/down-1.png','./sprites/down-2.png','./sprites/down-3.png','./sprites/down-4.png','./sprites/down-5.png'];
    this.spritesRight = ['./sprites/right-0.png','./sprites/right-1.png','./sprites/right-2.png','./sprites/right-3.png','./sprites/right-4.png','./sprites/right-5.png'];

    this.draw = function(){
       var that = this;
       this.image.src = imgsrc;
       this.image.onload = function() {
         board.context.drawImage(that.image, that.x, that.y, that.width, that.height);
       }
    }

    this.attack = function(){
       var that = this;
       this.attackImage.src = './images/attack.gif';
       this.attackImage.onload = function() {
         board.context.drawImage(that.attackImage, that.x, that.y - 25, that.width, that.height);
       }
      console.log(that.x);
    }

    this.updateDraw = function(){
        board.context.drawImage(this.image, this.x, this.y);
    }
}

Player.prototype.checkMonsterCollision = function(){
  if (this.x < monster.x + monster.width &&
     this.x + this.width > monster.x &&
     this.y < monster.y + monster.height &&
     this.height + this.y > monster.y) {
      console.log('collision at direction! ' + this.direction)
      this.collide = true;
  }
}

Player.prototype.moveUp = function(){
  this.direction = 'N';
  this.y -= this.speed;
  if(this.y <= 10) this.y = 10;
  this.checkMonsterCollision();
}

Player.prototype.moveDown = function(){
  this.direction = 'S';
  this.y += this.speed;
  if(this.y >= 420) this.y = 420;
  this.checkMonsterCollision();
}

Player.prototype.moveLeft = function(){
  this.direction = 'W';
  this.x -= this.speed;
  if(this.x <= 32) this.x = 32;
  this.checkMonsterCollision();
}

Player.prototype.moveRight = function(){
  this.direction = 'E';
  this.x += this.speed;
  if(this.x >= 570) this.x = 570;
  this.checkMonsterCollision();
}
