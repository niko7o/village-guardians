// Preloader imágenes
var images = [];
var _player1img = './images/guardian.png';
var _player2img = './images/guardian.png';
var _monsterimg = './images/monster.png';
images.push(_player1img);
images.push(_player2img);
images.push(_monsterimg);

// Init our objects
board = new Board();
grid = new Grid(32, 15, 15);
guardian = new Player(45, 40, images[0], board.canvas.width/2, board.canvas.height/2 - 45);
guardian2 = new Player(45, 40, images[1], board.canvas.width/2 - 45, board.canvas.height/2 - 45);
monster = new Monster(32, 32, images[2], random(480), random(350));
village = new Village(4000);

// Monster creation
var monsterArmy = [];
for(var i = 0; i < 3; i++){
  monsterArmy.push(monster);
}


$(document).ready(function() {
  // Creación del canvas
  board.start();

  // Flujo de pantallas
  $('.start').click(function(){
    $('#menu').toggleClass('active hidden');
    $('#game').toggleClass('hidden active');
    $('#sidebar').toggleClass('hidden active');
  });

  setInterval(update, 20)
});

function update() {
    // Monsters (to be array)
    monster.draw();

    // Player 1
    guardian.draw();
    guardian.running();

    // Player 2
    guardian2.draw();
    guardian2.running();

    // Village DOM
    document.getElementById('village-health').innerHTML = village.loseHealth();

    // Board
    board.clear();

    // RAF
    // requestAnimationFrame(update);
}

function random(max) {
  return Math.floor(Math.random() * (max));
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      guardian.moveUp();
      break;
    case 40:
      guardian.moveDown();
      break;
    case 37:
      guardian.moveLeft();
      break;
    case 39:
      guardian.moveRight();
      break;

    case 87:
      guardian2.moveUp();
      break;
    case 83:
      guardian2.moveDown();
      break;
    case 65:
      guardian2.moveLeft();
      break;
    case 68:
      guardian2.moveRight();
      break;
  }
}

document.onkeyup = function(e) {
  guardian.stopped();
  guardian2.stopped();
}
