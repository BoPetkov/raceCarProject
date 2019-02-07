function Tires(){

    this.lvlTire = 1;
    this.tireCost = 500;

    this.tireLevel = function(){
        
        this.lvlTire += 1;
        this.tireCost *= 2;

    }
}