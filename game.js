// Objects init
board = new Board(640, 480);
grid = new Grid(32, 15, 15);
guardian = new Player(32, 32, './sprites/down-0.png', board.width/2, board.height/2 - 45);
guardian2 = new Player(32, 32, './sprites/down-3.png', board.width/2 - 45, board.height/2 - 45);
monster = new Monster();
village = new Village(4000);

// Multikeys
keys = [];

$(document).ready(function() {
  board.start();

  $('.start').click(function(){
    $('#menu').toggleClass('active hidden');
    $('#game').toggleClass('hidden active');
    $('#sidebar').toggleClass('hidden active');
  });

  guardian.draw(); // Precarga

  //requestAnimationFrame(update);
  
  setInterval(update, 1000/60)
});

var randomMonsterSprite = ['./images/monster.png','./images/monster2.png']
for(var i = 0; i < 6; i++){
  monster.army.push(new Monster(32, 28, randomMonsterSprite[0], random(480), random(350), i));
}

function update() {
    // Monsters
    for(var i = 0; i < monster.army.length; i++){ monster.army[i].draw(); }

    // Player 1
    guardian.draw();
    guardian.updateDraw();

    // Player 2
    guardian2.draw();

    // Sidebar information
    document.getElementById('village-health').innerHTML = village.loseHealth();
    document.getElementById('xC').innerHTML = Math.floor(guardian.x);
    document.getElementById('yC').innerHTML = Math.floor(guardian.y);
    document.getElementById('monsters-left').innerHTML = monster.army.length;

    // Grid collisions
    grid.makeCollision();

    // What key is being pressed
    keyPresses();

    board.clear();
    //requestAnimationFrame(update);
}

// **** UTILITY FUNCTIONS ****

function random(max) {
  return Math.floor(Math.random() * (max));
}

function keyPresses(){
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

  document.body.addEventListener("keydown", function (e) {
     keys[e.keyCode] = true;
  });

  document.body.addEventListener("keyup", function (e) {
     keys[e.keyCode] = false;
  });
}
