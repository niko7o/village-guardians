$(document).ready(function() {
  board = new Board();
  board.start();

  player = new Player(50, 50, './images/guardian.png', board.canvas.width/2 - 50, board.canvas.height/2 - 50);

  monster = new Monster(30, 30, './images/guardian.png', 100, 100);
  var monsters = [monster];

  village = new Village(4000);
  obstacle = new Obstacle();

  // We should draw our player once the document is ready
  player.draw();
});

function update() {
    // Player
    player.draw();

    // Monsters
    monster.appear();

    // Village
    // village.loseHealth();

    // Board
    board.frames += 1;
    board.clear();
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      player.moveUp();
      break;
    case 40:
      player.moveDown();
      break;
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
  }
}

document.onkeyup = function(e) {
  player.stopped();
}
