function Village(health, level) {
    this.health = health;
    this.level = level;
}

Village.prototype.loseHealth = function(){
    while(this.health > 0){
      return this.health -= 1 * monster.army.length;
    }
    if(this.health === undefined || this.health < 0){
      this.health = 0;
    }
};

Village.prototype.change = function(){

}
