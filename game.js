// Preloader imágenes
var images = [];
var _guardianimg = './images/guardian.png';
var _player2img = './images/guardian.png';
var _monsterimg = './images/monster.png';
images.push(_guardianimg);
images.push(_monsterimg);

// Init our objects
board = new Board(640, 480);
grid = new Grid(32, 15, 15);
guardian = new Player(45, 40, images[0], board.width/2, board.height/2 - 45);
guardian2 = new Player(45, 40, images[0], board.width/2 - 45, board.height/2 - 45);
monster = new Monster(32, 32, images[1], random(480), random(350));
village = new Village(4000);

// Multikeys
keys = [];

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
    // Monsters
    monster.draw();
    document.getElementById('monsters-left').innerHTML = monsterArmy.length;

    // Guardians
    updateGuardians();

    // Village health status (realtime)
    document.getElementById('village-health').innerHTML = village.loseHealth();

    // Reset
    board.clear();

    // Keys
    if (keys[37]) { guardian.moveLeft(); }
    if (keys[38]) { guardian.moveUp(); }
    if (keys[39]) { guardian.moveRight(); }
    if (keys[40]) { guardian.moveDown(); }

    if (keys[65]) { guardian2.moveLeft(); }
    if (keys[87]) { guardian2.moveUp(); }
    if (keys[68]) { guardian2.moveRight(); }
    if (keys[83]) { guardian2.moveDown(); }

    document.body.addEventListener("keydown", function (e) {
       keys[e.keyCode] = true;
    });
    document.body.addEventListener("keyup", function (e) {
       keys[e.keyCode] = false;
       guardian.stopped();
       guardian2.stopped();
    });
}

function updateGuardians(){
  guardian.draw();
  guardian2.draw();
}

function random(max) {
  return Math.floor(Math.random() * (max));
}
