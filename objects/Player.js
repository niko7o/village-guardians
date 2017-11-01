function Player(width, height, imgsrc, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 1.4;
    this.score = 0;
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
  var atk_dir_y;
  var atk_dir_x;

  if(this.direction == 'N') atk_dir_y = this.y - 32;
  if(this.direction == 'W') atk_dir_y = this.x - 32;
  if(this.direction == 'S') atk_dir_x = this.y + 32;
  if(this.direction == 'E') atk_dir_x = this.x + 32;

  this.image = new Image();
  ctx = board.context;
  ctx.drawImage(this.image,  atk_dir_x, atk_dir_y, this.width, this.height);
  this.image.src = './images/attack.gif';

  if(monster.x - this.x < 32 || monster.y - this.y < 32) console.log('HIT!!!')
}

Player.prototype.moveUp = function(){
  this.direction = 'N';
  this.y -= this.speed;
  if(this.y <= 10) this.y = 10;
}

Player.prototype.moveDown = function(){
  this.direction = 'S';
  this.y += this.speed;
  if(this.y >= 420) this.y = 420;
}

Player.prototype.moveLeft = function(){
  this.direction = 'W';
  this.x -= this.speed;
  if(this.x <= 32) this.x = 32;
}

Player.prototype.moveRight = function(){
  this.direction = 'E';
  this.x += this.speed;
  if(this.x >= 570) this.x = 570;
}
