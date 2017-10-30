// ***************************
//     VILLAGE GUARDIANS
// ***************************

board = new Board();

monster = new Monster(32, 32, './images/monster.png', random(550), random(350));
monster2 = new Monster(32, 32, './images/monster.png', random(550), random(350));
monster3 = new Monster(32, 32, './images/monster.png', random(550), random(350));
monster4 = new Monster(32, 32, './images/monster.png', random(550), random(350));

village = new Village(4000);
obstacle = new Obstacle();

$(document).ready(function() {
  board.start();
  guardian = new Player(50, 50, './images/guardian.png', board.canvas.width/2 + 50, board.canvas.height/2 + 50);
  guardian2 = new Player(50, 50, './images/guardian.png', board.canvas.width/2 - 50, board.canvas.height/2 + 50);
});

function update() {
    // Monsters (to be array)
    monster.draw();
    monster2.draw();
    monster3.draw();
    monster4.draw();

    // Player 1
    guardian.draw();
    guardian.running();

    // Player 2
    guardian2.draw();
    guardian2.running();

    // Board
    board.clear();
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
