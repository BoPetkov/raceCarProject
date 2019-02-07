function Fuel(){

    this.lvlFuel = 1;
    this.fuelCost = 500;

    this.fuelLevel = function(){
        
        this.lvlFuel += 1;
        this.fuelCost *= 2;

    }
}