function Village(health) {
    this.health = health;
}

Village.prototype.loseHealth = function(){
  this.health -= 1 * monsters.length;
  console.log(this.health);
}
