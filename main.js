// Object initiation
player1 = new Player(320, 240);
player2 = new Player(280, 240);
monster = new Monster();
village = new Village(2000);
wall = new Wall();

// Multikeys
keys = [];

window.onload = function() {
  // Canvas init
  var canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  // Functions to execute once
  preload();
  createMonsterArmy(4);
  createWalls();

  // Game loop
  var myGame = setInterval(update, 1000 / 60);

  function preload() {
    player1.preload();
    player2.preload();
    player2.img.src = './sprites/down-3.png';
  }

  function update() {
    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw players
    player1.draw();
    player2.draw();

    // Draw monsters
    moveMonsterArmy();
    drawMonsterArmy();

    // Draw walls
    drawWalls();

    // Village
    village.loseHealth();

    // Game info
    ctx.fillStyle = "white";
    ctx.fillText("Village health: " + village.health, 540, 20);

    ctx.fillStyle = "white";
    ctx.fillText("P1 SCORE: " + player1.score, 10, 20);

    ctx.fillStyle = "white";
    ctx.fillText("P2 SCORE: " + player2.score, 300, 20);

    // Detect keypresses
    keyPresses();
  }

  function createWalls(){
    wall.array.push(new Wall(30, 90, 50, 40));
    wall.array.push(new Wall(180, 30, 50, 40));
    wall.array.push(new Wall(530, 214, 50, 40));
    wall.array.push(new Wall(310, 430, 200, 30));
  }

  function randomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function createMonsterArmy(max) {
    var urls = ['./sprites/monster.png','./sprites/monster2.png'];
    for (var i = 0; i < max; i++) {
      monster.army.push(new Monster(randomBetween(0, 600), randomBetween(0, 440), i));
      monster.army[i].img.src = urls[randomBetween(0,1)];
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
    for(var i = 0; i < wall.array.length; i++){
      wall.draw(wall.array[i].x, wall.array[i].y, wall.array[i].width, wall.array[i].height, 'red');
    }
  }

  function keyPresses() {
    // Keys
    if (keys[37]) {
      player1.img.src = './sprites/left-0.png';
      player1.moveLeft();
      player1.checkMonsterCollision();
    }
    if (keys[38]) {
      player1.img.src = './sprites/up-0.png';
      player1.moveUp();
      player1.checkMonsterCollision();
    }

    if (keys[39]) {
      player1.img.src = './sprites/right-0.png';
      player1.moveRight();
      player1.checkMonsterCollision();
    }
    if (keys[40]) {
      player1.img.src = './sprites/down-1.png';
      player1.moveDown();
      player1.checkMonsterCollision();
    }
    if (keys[32]) { // Spacebar
      player1.attack();
    }

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
    if (keys[80]) clearInterval(myGame);
  }

  document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
  });

};
