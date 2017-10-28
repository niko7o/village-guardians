$(document).ready(function() {
  board = new Board();
  board.start();
  player = new Player(50, 50, 'https://www.smwcentral.net/images/ranks/pokemon/natu.png', board.canvas.width/2 - 50, board.canvas.height/2 - 50);
  monster = new Monster(30, 30, 'blue', 0, 100);
  village = new Village(4000);
  obstacle = new Obstacle();

});

function update() {
    board.clear();
    board.frames += 1;

    player.newPos();
    player.update();

    //console.log(village.health -= 1);
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
  player.stopMove();
}
