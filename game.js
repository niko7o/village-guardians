// ----------------------------- IMAGE LOADER -----------------------------
var imagesOK = 0;
var imgs = [];

var imageURLs = [];
imageURLs.push("https://i.imgur.com/R13yolQ.png");
imageURLs.push("https://i.imgur.com/D6rITFC.png");

loadAllImages();

function loadAllImages(){
    for (var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        imgs.push(img);
        img.onload = function(){
            imagesOK++;
            if (imagesOK >= imageURLs.length) {
                console.log('images are ready!');
            }
        };
        img.onerror = function(){ alert("image load failed"); }
        img.crossOrigin = "anonymous";
        img.src = imageURLs[i];
    }
}
// END OF IMAGE LOADER

board = new Board();
village = new Village(4000);
grid = new Grid(32, 15, 15);
monster = new Monster(32, 32, './images/monster.png', random(480), random(350));

// Monster creation
var monsterArmy = [];
for(var i = 0; i < 4; i++){
  monsterArmy.push(monster);
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

    // Village DOM
    document.getElementById('village-health').innerHTML = village.loseHealth();
}

function random(max) {
  return Math.floor(Math.random() * (max));
}

function populateMonsterArmy(number){

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
