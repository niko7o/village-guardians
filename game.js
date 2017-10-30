// ***************************
//     VILLAGE GUARDIANS
// ***************************

board = new Board();
village = new Village(4000);
obstacle = new Obstacle();

var monsterArmy = [];

for(var i = 0; i < 7; i++){
  monsterArmy.push(monster = new Monster(32, 32, './images/monster.png', random(480), random(350)));
}

$(document).ready(function() {
  board.start();

  $('.start').click(function(){
    $('#menu').toggleClass('active hidden');
    $('#game').toggleClass('hidden active');
    $('#sidebar').toggleClass('hidden active');
  });

  guardian = new Player(45, 40, './images/guardian.png', board.canvas.width/2, board.canvas.height/2 - 45);
  guardian2 = new Player(45, 40, './images/guardian.png', board.canvas.width/2 - 45, board.canvas.height/2 - 45);

  guardian.draw();
  guardian2.draw()
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

    // Board
    board.clear();
    //requestAnimationFrame(update);
}

function random(max) {
  return Math.floor(Math.random() * (max));
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    // GUARDIAN one ARROW KEYS
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
    // GUARDIAN two WASD
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
