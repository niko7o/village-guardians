// ***************************
//     VILLAGE GUARDIANS
// ***************************

$(document).ready(function() {
  board = new Board();
  board.start();
  guardian = new Player(50, 50, './images/guardian.png', board.canvas.width/2 + 50, board.canvas.height/2 + 50);
  monster = new Monster(30, 30, './images/guardian.png', 100, 100);
  village = new Village(4000);
  obstacle = new Obstacle();
});

function update() {
    // Player
    guardian.draw();

    // Board
    board.clear();
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
  }
}

document.onkeyup = function(e) {
  guardian.stopped();
}
