var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

function Game() {
  this.player1 = new Player(350, 300);
  this.player2 = new Player(300, 300);
  this.monster = new Monster();
  this.village = new Village(2000);
  this.wall = new Wall();
}

Game.prototype.update = function(){
    // Clear board
    ctx.clearRect(0, 0, 640, canvas.height);

    // Sidebar info
    $('#player1score').html(this.player1.score);
    $('#player2score').html(this.player2.score);
    $('#villagehealth').html(this.village1.health);

    // Draw players
    if(players == 2){
      this.player1.draw();
      this.player2.draw();
    } else {
      this.player1.draw();
    }

    // Draw monsters
    moveMonsterArmy();
    drawMonsterArmy();

    // Draw walls
    //drawWalls();

    // Village
    this.village.loseHealth();

    // Village 2
    if(this.village.health > 0 && this.monster.army.length == 0){
      isPaused = true;
      villagesCompleted++;
      $('canvas').css('background-image','url('+'./images/village2.png');
    }

    // Detect keypresses
    keyPresses();

    // Game over
    if(this.village.health == 0){
      clearInterval(myGame);
      $('canvas').css('filter',"blur(4px) grayscale(1)");
      $('canvas').css('transform','scale(1.03)');
      $('#gameover').css('display','block');
      $('#gameover img').css('display','block');
    }
};

Game.prototype.changeLevel = function(level){

};
