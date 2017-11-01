function Grid () {
    this.tileSize = 32;
    this.rows = 15;
    this.columns = 15;
    this.isCollide = false;
    this.matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
}

Grid.prototype.forbiddenTiles = function() {
  console.log("- Guardian x is: " + guardian.x);
  for(var c = 0; c < 15; c++){
    for(var r = 0; r < 15; r++){
      if(this.matrix[c][r] == 1){
        console.log("Forbidden tile at x:" + r*this.tileSize + " and y:" + c*32);
      }
    }
  }
}


Grid.prototype.makeCollision = function() {

  ctx = board.context;
  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(108, 94, 85, 100);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(320, 0, 85, 97);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(447, 0, 85, 97);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(489, 287, 87, 97);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(382, 274, 45, 105);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(382, 274, 45, 105);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(294, 274, 45, 105);

  ctx.fillStyle = 'rgba(255,0,0,0.3)';
  ctx.fillRect(212, 274, 45, 105);
}
