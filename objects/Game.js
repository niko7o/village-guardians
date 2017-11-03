function Game(village) {
  this.player1 = new Player(350, 300);
  this.player2 = new Player(300, 300);
  this.monster = new Monster();
  this.village = new Village(2000);
  this.wall = new Wall();
}

Game.prototype.update = function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  var players = 1;

  ctx.clearRect(0, 0, 640, canvas.height);

  $('#player1score').html(this.player1.score);
  $('#player2score').html(this.player2.score);
  $('#villagehealth').html(this.village.health);

  // Draw players
  if (players == 2) {
    this.player1.draw();
    this.player2.draw();
  } else {
    this.player1.draw();
  }

  // Draw monsters
  this.moveMonsterArmy();
  this.drawMonsterArmy();

  // Draw walls
  // drawWalls();

  // Village
  this.loseVillageHealth();

  if (this.village.health > 0 && this.monster.army.length == 0) {
    isPaused = true;
    villagesCompleted++;
    $('canvas').css('background-image', 'url(' + './images/village2.png');
  }

  // Detect keypresses
  this.keyPresses();

  // Game over
  if (this.village.health == 0) {
    clearInterval(myGame);
    $('canvas').css('filter', "blur(4px) grayscale(1)");
    $('canvas').css('transform', 'scale(1.03)');
    $('#gameover').css('display', 'block');
    $('#gameover img').css('display', 'block');
  }
};

// Game variables
var players = 1;
var villagesCompleted = 1;

// Player quantity
if ($('.player2').click(function() {
  players = 2;
}));

Game.prototype.preload = function() {
  this.player1.preload();
  this.player2.preload();
  this.player2.img.src = './sprites/down-3.png';
};

Game.prototype.createWalls = function() {
  //                      x   y   w   h
  this.wall.array.push(new Wall(32, 30, 32, 32));
  this.wall.array.push(new Wall(33, 165, 32, 32));
  this.wall.array.push(new Wall(97, 226, 32, 32));
  this.wall.array.push(new Wall(9, 324, 45, 55));
  this.wall.array.push(new Wall(0, 420, 160, 32));
  this.wall.array.push(new Wall(160, 428, 130, 32));
  this.wall.array.push(new Wall(287, 384, 99, 32));
  this.wall.array.push(new Wall(388, 428, 130, 32));
  this.wall.array.push(new Wall(512, 352, 60, 62));
  this.wall.array.push(new Wall(572, 415, 80, 62));
  this.wall.array.push(new Wall(273, 163, 110, 90));
  this.wall.array.push(new Wall(608, 0, 32, 125));
};

Game.prototype.loseVillageHealth = function() {
    while(this.village.health > 0){
      return this.village.health -= 1 * this.monster.army.length;
    }
    if(this.village.health === undefined || this.village.health < 0){
      this.village.health = 0;
    }
};

Game.prototype.randomBetween = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

Game.prototype.createMonsterArmy = function(max) {
  var urls = ['./sprites/monster.png', './sprites/monster2.png'];
  for (var i = 0; i < max; i++) {
    this.monster.army.push(new Monster(this.randomBetween(0, 600), this.randomBetween(0, 440), i));
    this.monster.army[i].img.src = urls[this.randomBetween(0, 1)];
  }
};

Game.prototype.moveMonsterArmy = function() {
  for (var i = 0; i < this.monster.army.length; i++) {
    this.monster.army[i].move();
    this.monster.army[i].checkPlayerCollision();
  }
};

Game.prototype.drawMonsterArmy = function() {
  for (var i = 0; i < this.monster.army.length; i++) {
    this.monster.army[i].draw();
  }
};

Game.prototype.drawWalls = function() {
  for (var i = 0; i < this.wall.array.length; i++) {
    this.wall.draw(this.wall.array[i].x, this.wall.array[i].y, this.wall.array[i].width, this.wall.array[i].height, 'rgba(255,0,0,0.5)');
  }
};

Game.prototype.mute = function() {
  audio.paused ? audio.play() : audio.pause();
};

Game.prototype.keyPresses = function() {
  if (keys[37]) {
    var left = ['./sprites/left-0.png', './sprites/left-1.png', './sprites/left-2.png'];
    leftAnim = setTimeout(function() {
      for (var i = 0; i < left.length; i++) player1.img.src = left[i];
    }, 100);
    this.player1.img.src = left[0];
    this.player1.moveLeft();
    this.player1.checkMonsterCollision();
  }
  if (keys[38]) {
    var up = ['./sprites/up-0.png', './sprites/up-1.png', './sprites/up-2.png'];
    upAnim = setTimeout(function() {
      for (var i = 0; i < up.length; i++) player1.img.src = up[i];
    }, 100);
    this.player1.img.src = up[0];
    this.player1.moveUp();
    this.player1.checkMonsterCollision();
  }

  if (keys[39]) {
    var right = ['./sprites/right-0.png', './sprites/right-1.png', './sprites/right-2.png'];
    rightAnim = setTimeout(function() {
      for (var i = 0; i < right.length; i++) player1.img.src = right[i];
    }, 100);
    this.player1.img.src = right[0];
    this.player1.moveRight();
    this.player1.checkMonsterCollision();
  }
  if (keys[40]) {
    var down = ['./sprites/down-1.png', './sprites/down-2.png'];
    downAnim = setTimeout(function() {
      for (var i = 0; i < down.length; i++) player1.img.src = down[i];
    }, 100);
    this.player1.img.src = down[0];
    this.player1.moveDown();
    this.player1.checkMonsterCollision();
  }
  if (keys[32]) { // Spacebar
    this.player1.attack();
  }

  if (players == 2) {
    if (keys[65]) {
      this.player2.img.src = './sprites/left-3.png';
      this.player2.moveLeft();
      this.player2.checkMonsterCollision();
    }
    if (keys[87]) {
      this.player2.img.src = './sprites/up-3.png';
      this.player2.moveUp();
      this.player2.checkMonsterCollision();
    }
    if (keys[68]) {
      this.player2.img.src = './sprites/right-3.png';
      this.player2.moveRight();
      this.player2.checkMonsterCollision();
    }
    if (keys[83]) {
      this.player2.img.src = './sprites/down-4.png';
      this.player2.moveDown();
      this.player2.checkMonsterCollision();
    }
    if (keys[69]) { // E
      this.player2.attack();
    }
  }
};
