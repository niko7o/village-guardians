// Object initiation
var newGame = new Game();

setInterval(newGame.update(), 1000 / 60);

// Multikeys
keys = [];

window.onload = function() {
  var audio = new Audio('./audio/8bitrs.mp3');
  audio.play();

  // Game variables
  var players = 1;
  var villagesCompleted = 1;

  // Player quantity
  if($('.player2').click(function(){
    players = 2;
  }));

  // Functions to execute once
  preload();
  createMonsterArmy(4);
  createWalls();

  function preload() {
    player1.preload();
    player2.preload();
    player2.img.src = './sprites/down-3.png';
  }

  function createWalls() {
    //                        x   y   w   h
    wall.array.push(new Wall(32, 30, 32, 32));
    wall.array.push(new Wall(33, 165, 32, 32));
    wall.array.push(new Wall(97, 226, 32, 32));
    wall.array.push(new Wall(9, 324, 45, 55));
    wall.array.push(new Wall(0, 420, 160, 32));
    wall.array.push(new Wall(160, 428, 130, 32));
    wall.array.push(new Wall(287, 384, 99, 32));
    wall.array.push(new Wall(388, 428, 130, 32));
    wall.array.push(new Wall(512, 352, 60, 62));
    wall.array.push(new Wall(572, 415, 80, 62));
    wall.array.push(new Wall(273, 163, 110, 90));
    wall.array.push(new Wall(608, 0, 32, 125));
  }

  function randomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function createMonsterArmy(max) {
    var urls = ['./sprites/monster.png', './sprites/monster2.png'];
    for (var i = 0; i < max; i++) {
      monster.army.push(new Monster(randomBetween(0, 600), randomBetween(0, 440), i));
      monster.army[i].img.src = urls[randomBetween(0, 1)];
    }
  }

  function moveMonsterArmy() {
    for (var i = 0; i < monster.army.length; i++) {
      monster.army[i].move();
      monster.army[i].checkPlayerCollision();
    }
  }

  function drawMonsterArmy() {
    for (var i = 0; i < monster.army.length; i++) {
      monster.army[i].draw();
    }
  }

  function drawWalls() {
    for (var i = 0; i < wall.array.length; i++) {
      wall.draw(wall.array[i].x, wall.array[i].y, wall.array[i].width, wall.array[i].height, 'rgba(255,0,0,0.5)');
    }
  }

  function mute(){
    audio.paused ? audio.play() : audio.pause();
  }

  function keyPresses() {
    if (keys[37]) {
      var left = ['./sprites/left-0.png', './sprites/left-1.png', './sprites/left-2.png'];
      leftAnim = setTimeout(function(){
        for(var i = 0; i < left.length; i++) player1.img.src = left[i];
      }, 100);
      player1.img.src = left[0];
      player1.moveLeft();
      player1.checkMonsterCollision();
    }
    if (keys[38]) {
      var up = ['./sprites/up-0.png', './sprites/up-1.png', './sprites/up-2.png'];
      upAnim = setTimeout(function(){
        for(var i = 0; i < up.length; i++) player1.img.src = up[i];
      }, 100);
      player1.img.src = up[0];
      player1.moveUp();
      player1.checkMonsterCollision();
    }

    if (keys[39]) {
      var right = ['./sprites/right-0.png', './sprites/right-1.png', './sprites/right-2.png'];
      rightAnim = setTimeout(function(){
        for(var i = 0; i < right.length; i++) player1.img.src = right[i];
      }, 100);
      player1.img.src = right[0];
      player1.moveRight();
      player1.checkMonsterCollision();
    }
    if (keys[40]) {
      var down = ['./sprites/down-1.png', './sprites/down-2.png'];
      downAnim = setTimeout(function(){
        for(var i = 0; i < down.length; i++) player1.img.src = down[i];
      }, 100);
      player1.img.src = down[0];
      player1.moveDown();
      player1.checkMonsterCollision();
    }
    if (keys[32]) { // Spacebar
      player1.attack();
    }

    if(players == 2){
    if (keys[65]) {
      player2.img.src = './sprites/left-3.png';
      player2.moveLeft();
      player2.checkMonsterCollision();
    }
    if (keys[87]) {
      player2.img.src = './sprites/up-3.png';
      player2.moveUp();
      player2.checkMonsterCollision();
    }
    if (keys[68]) {
      player2.img.src = './sprites/right-3.png';
      player2.moveRight();
      player2.checkMonsterCollision();
    }
    if (keys[83]) {
      player2.img.src = './sprites/down-4.png';
      player2.moveDown();
      player2.checkMonsterCollision();
    }
    if (keys[69]) { // E
      player2.attack();
    }
  }
  }

  document.body.addEventListener('keydown', function(e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener('keyup', function(e) {
    keys[e.keyCode] = false;
  });

  // jQuery
  $('.btn').click(function() {
    $('#start').css('display', 'none');
    $('canvas').css('display', 'block');
    $('#gameStarted').css('display', 'block');
    $('#sidebar').css('display', 'block');
  });

  $('.player1').hover(function() {
    $('.player1').attr('src','./images/player1hover.png');
  }, function() {
    $('.player1').attr('src','./images/player1.png');
  });

  $('.player2').hover(function() {
    $('.player2').attr('src','./images/player2hover.png');
  }, function() {
    $('.player2').attr('src','./images/player2.png');
  });

};
