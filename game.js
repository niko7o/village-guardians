// Preloader imágenes
var images = [];
var _player1 = './sprites/down-0.png';
var _player2 = './sprites/down-3.png';
var _monsterimg = './images/monster.png';
var _monsterimg2 = './images/monster2.png';
images.push(_player1);
images.push(_player2);
images.push(_monsterimg);
images.push(_monsterimg2);

// Init our objects
board = new Board(640, 480);
grid = new Grid(32, 15, 15);
guardian = new Player(32, 32, images[0], board.width/2, board.height/2 - 45);
guardian2 = new Player(32, 32, images[1], board.width/2 - 45, board.height/2 - 45);
monster = new Monster(32, 28, images[2], random(480), random(350), 1);
village = new Village(4000);

// Multikeys
keys = [];

$(document).ready(function() {
  board.start();
  board.stop();
  $('.start').click(function(){
    board.start();
    $('#menu').toggleClass('active hidden');
    $('#game').toggleClass('hidden active');
    $('#sidebar').toggleClass('hidden active');
  });

  setInterval(update, 1000/60)
  //requestAnimationFrame(update);
});

function update() {
    // Monsters
    monster.draw();
    monster.move();

    // Guardians
    guardian.draw();
    guardian2.draw();


    // Sidebar information
    document.getElementById('village-health').innerHTML = village.loseHealth();
    document.getElementById('xC').innerHTML = Math.floor(guardian.x);
    document.getElementById('yC').innerHTML = Math.floor(guardian.y);
    document.getElementById('monsters-left').innerHTML = monster.army.length;

    // Grid collisions
    grid.makeCollision();

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
    if (keys[32]) {
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

    document.body.addEventListener("keydown", function (e) {
       keys[e.keyCode] = true;
    });

    document.body.addEventListener("keyup", function (e) {
       keys[e.keyCode] = false;
    });

    //requestAnimationFrame(update);
    board.clear();
}

function random(max) {
  return Math.floor(Math.random() * (max));
}
