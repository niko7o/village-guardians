// Objects init
board = new Board(640, 480);
wall = new Wall();
guardian = new Player(32, 32, './sprites/down-0.png', board.width / 2, board.height / 2 - 45);
guardian2 = new Player(32, 32, './sprites/down-3.png', board.width / 2 - 45, board.height / 2 - 45);
monster = new Monster();
village = new Village(4000);

// Multikeys
keys = [];

$(document).ready(function() {
  board.start();
  createMonsterArmy(4);

  setTimeout(function(){
    monster.move();
    console.log('hi')
  }, 3000);

  $('.start').click(function() {
    $('#menu').toggleClass('active hidden');
    $('#game').toggleClass('hidden active');
    $('#sidebar').toggleClass('hidden active');
  });

  //requestAnimationFrame(update);
  setInterval(update, 1000 / 60)
});


function update() {
  // Walls
  wall.create(108, 94, 85, 100, 'red');

  // Monsters
  drawMonsterArmy();
  monster.stayInBounds();

  // Player 1
  guardian.draw();

  // Player 2
  guardian2.draw();

  // Sidebar information
  document.getElementById('village-health').innerHTML = village.loseHealth();
  document.getElementById('xC').innerHTML = Math.floor(guardian.x);
  document.getElementById('yC').innerHTML = Math.floor(guardian.y);
  document.getElementById('monsters-left').innerHTML = monster.army.length;

  // What key is being pressed
  keyPresses();

  board.clear();
  //requestAnimationFrame(update);
}

// **** UTILITY FUNCTIONS ****

function random(max) {
  return Math.floor(Math.random() * (max));
}

function randomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createMonsterArmy(max) {
  var randomMonsterSprite = ['./images/monster.png', './images/monster2.png']
  for (var i = 0; i < max; i++) {
    monster.army.push(new Monster(32, 28, randomMonsterSprite[randomBetween(0, 1)], random(480), random(350), i));
  }
}

function drawMonsterArmy() {
  for (var i = 0; i < monster.army.length; i++) {
    monster.army[i].draw();
  }
}

function keyPresses() {
  // Keys
  if (keys[37]) {
    guardian.image.src = guardian.spritesLeft[0];
    guardian.moveLeft();
  }
  if (keys[38]) {
    guardian.image.src = guardian.spritesUp[0];
    guardian.moveUp();
  }

  if (keys[39]) {
    guardian.image.src = guardian.spritesRight[0];
    guardian.moveRight();
  }
  if (keys[40]) {
    guardian.image.src = guardian.spritesDown[0];
    guardian.moveDown();
  }
  if (keys[32]) { // Spacebar
    guardian.attack();
  }

  if (keys[65]) {
    guardian2.image.src = guardian2.spritesLeft[3];
    guardian2.moveLeft();
  }
  if (keys[87]) {
    guardian2.image.src = guardian2.spritesUp[3];
    guardian2.moveUp();
  }
  if (keys[68]) {
    guardian2.image.src = guardian2.spritesRight[3];
    guardian2.moveRight();
  }
  if (keys[83]) {
    guardian2.image.src = guardian2.spritesDown[3];
    guardian2.moveDown();
  }
  if (keys[69]) { // E
    guardian2.attack();
  }

  document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
  });
}
