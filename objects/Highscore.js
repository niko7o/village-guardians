function Highscore() {
    this.default = 0;
    this.highscore = localStorage.getItem('highscore');
}

Highscore.prototype.set = function() {
  if(localStorage.getItem('highscore') === null){
    localStorage.setItem('highscore', 0);
  }
  if(player1.score > localStorage.getItem('highscore')){
    localStorage.setItem('highscore', player1.score);
  }
}

Highscore.prototype.get = function() {
  return localStorage.getItem('highscore');
}
