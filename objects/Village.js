function Village(health) {
    this.health = health;
}

Village.prototype.loseHealth = function(){
  while(this.health > 0){
    return this.health -= 1 * monsterArmy.length;
  }
}
