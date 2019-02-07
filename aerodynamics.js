function Aerodynamics(){
    
    this.lvlAerodynamics = 1;
    this.aerodynamicsCost = 500;

    this.aerodynamicsLevel = function(){

        this.lvlAerodynamics += 1;
        this.aerodynamicsCost *= 2;
        
    }
}