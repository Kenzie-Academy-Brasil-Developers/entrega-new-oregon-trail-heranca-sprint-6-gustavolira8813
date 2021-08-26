const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name, food, isHealthy){
        super(name, food, isHealthy)
        this.food = 2
    }
    hunt(){
        this.food += 5
    }
    eat(){
        if(this.food >= 2){
            this.food -= 2
        }else{
            this.food -= this.food
            this.isHealthy = false
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}

module.exports = Hunter;