// Multikeys
keys = [];
var newGame;

//window.onload = function() {
$(document).ready(function() {
  // Audio
  var audio = new Audio('./audio/8bitrs.mp3');
  audio.play();

  document.body.addEventListener('keydown', function(e) {
    keys[e.keyCode] = true;
  });

  document.body.addEventListener('keyup', function(e) {
    keys[e.keyCode] = false;
  });

  // jQuery
  $('.btn').click(function() {
    $('#start').css('display', 'none');
    $('canvas').css('display', 'block');
    $('#gameStarted').css('display', 'block');
    $('#sidebar').css('display', 'block');
    newGame = new Game();
    newGame.preload();
    newGame.createMonsterArmy(4);
    newGame.createWalls();
    setInterval(newGame.update, 1000 / 60);
  });

  $('.player1').hover(function() {
    $('.player1').attr('src','./images/player1hover.png');
  }, function() {
    $('.player1').attr('src','./images/player1.png');
  });

  $('.player2').hover(function() {
    $('.player2').attr('src','./images/player2hover.png');
  }, function() {
    $('.player2').attr('src','./images/player2.png');
  });

});

// setTimeout(function(){
// }, 1000);
