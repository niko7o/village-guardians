// Object initiation
player1 = new Player(350, 300);
player2 = new Player(300, 300);
monster = new Monster();
village = new Village(2000);
wall = new Wall();
highscore = new Highscore();

// Multikeys
keys = [];

// Sprite loader
var sprites = [
  './sprites/attack.gif', // [0]
  './sprites/monster.png', // [1]
  './sprites/monster2.png', // [2]
  './sprites/down-1.png', // [3]
  './sprites/down-2.png', // [4]
  './sprites/down-3.png', // [5]
  './sprites/down-4.png', // [6]
  './sprites/down-5.png', // [7]
  './sprites/left-0.png', // [8]
  './sprites/left-1.png', // [9]
  './sprites/left-2.png', // [10]
  './sprites/left-3.png', // [11]
  './sprites/left-4.png', // [12]
  './sprites/left-5.png', // [13]
  './sprites/right-0.png', // [14]
  './sprites/right-1.png', // [15]
  './sprites/right-2.png', // [16]
  './sprites/right-3.png', // [17]
  './sprites/right-4.png', // [18]
  './sprites/right-5.png', // [19]
  './sprites/up-0.png', // [20]
  './sprites/up-1.png', // [21]
  './sprites/up-2.png', // [22]
  './sprites/up-3.png', // [23]
  './sprites/up-4.png', // [24]
  './sprites/up-5.png', // [25]
];

window.onload = function() {
  // Canvas
  var canvas = document.getElementById('game');
  ctx = canvas.getContext('2d');

  // Audios
  var bg_music = new Audio('./audio/titan.mp3');
  bg_music.play();

  //Highscore
  $('#highscore').html("HIGHSCORE: " + localStorage.getItem('highscore'));

  // Game variables
  var players = 1;
  var gameState = 1;
  var isPaused = false;
  var winner = '';
  var images = [];
  var loadcount = 0;
  var loadtotal = 0;
  var preloaded = false;

  // Player Quantity Checker
  if($('.player2').click(function(){ players = 2; }));

  // Functions to execute once
  images = loadImages(sprites);
  preload();
  createMonsterArmy(randomBetween(1,3));
  createWalls();

  // jQuery Event Handlers
  $('.audio').click(function() { mute(); });
  $('.player1').hover(function() { $('.player1').attr('src','./images/player1hover.png'); }, function() { $('.player1').attr('src','./images/player1.png'); });
  $('.player2').hover(function() { $('.player2').attr('src','./images/player2hover.png'); }, function() { $('.player2').attr('src','./images/player2.png'); });
  $('.btn').click(function() { $('#start').css('display', 'none'); $('#instructions').css('display', 'block'); });

  // Animated clouds
  window.setInterval(function() {
    $('body').animate({
      'background-position': '-=1px'
    }, 1, 'linear');
  }, 1000/60);

  // Play button
  $('.gotit').click(function() {
    $('#instructions').css('display', 'none');
    $('canvas').css('display', 'block');
    $('#gameStarted').css('display', 'block');
    $('#sidebar').css('display', 'block');
    myGame = setInterval(update, 1000/60);
  });

  function update() {

    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Sidebar info
    $('#player1score').html(player1.score);
    $('#player2score').html(player2.score);
    $('#villagehealth').html(village.health);

    // Draw players
    if(players == 2){
      player1.draw();
      player2.draw();
    } else {
      player1.draw();
    }

    // Draw monsters
    moveMonsterArmy();
    drawMonsterArmy();

    // Village
    village.loseHealth();
    if(village.health > 0 && monster.army.length == 0){
      createMonsterArmy(randomBetween(2, 10));
      village.health += (randomBetween(350, 1000));
      var change = new Audio('./audio/change.wav');
      change.play();
    }

    // Restrain user from interacting if gameState is 0
    if(gameState == 1) {
      keyPresses();
    }

    // Game over
    if(village.health == 0){
      clearInterval(myGame);
      gameState = 0;
      highscore.set();
      bg_music.pause();
      $('canvas').css('filter',"blur(4px) grayscale(1)");
      $('canvas').css('transform','scale(1.03)');
      $('#gameover').css('display','block');
      $('#gameover img').css('display','block');
      if(players == 2) {
        if(player1.score > player2.score){
          winner = "Player 1 Wins!";
          $('.winner').html(winner);
        } else {
          winner = "Player 2 Wins!";
          $('.winner').html(winner);
        }
      } else {
        $('.winner').html("Your score: " + player1.score);
      }
    }
  }

  /*  UTILITY FUNCTIONS  */

  function loadImages(imagefiles) {
      loadcount = 0;
      loadtotal = imagefiles.length;
      preloaded = false;

      var loadedimages = [];
      for (var i = 0; i < imagefiles.length; i++) {
          var image = new Image();
          image.onload = function () {
              loadcount++;
              if (loadcount == loadtotal) {
                  preloaded = true;
              }
          };
          image.src = imagefiles[i];
          loadedimages[i] = image;
      }
      return loadedimages;
  }

  function preload() {
    player1.preload();
    player2.preload();
    player2.img.src = './sprites/down-3.png';
    highscore.get();
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

  function mute() {
    if(bg_music.paused) {
      bg_music.play();
      $('.audio').attr('src','./images/audio-active.png');
    } else {
      bg_music.pause();
      $('.audio').attr('src','./images/audio-off.png');
    }
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

}; // end of window onload
