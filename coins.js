function Coins(){
     this.coins = 500;

     this.gainCoins = function(){
         this.coins += 100;
     }

     this.spendCoins = function(value){
         this.coins -= value;
     }
}