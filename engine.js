function Engine(){

    this.lvlEngine = 1;
    this.engineCost = 500;

    this.engineLevel = function(){
    
        this.lvlEngine += 1;
        this.engineCost *= 2;

    }
}