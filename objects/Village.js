function Village(health) {
    this.health = health;
}

Village.prototype.loseHealth = function(){
    while(this.health > 0){
      if(this.health === undefined) this.health = 0;
      return this.health -= 1 * monster.army.length;
    }
}
