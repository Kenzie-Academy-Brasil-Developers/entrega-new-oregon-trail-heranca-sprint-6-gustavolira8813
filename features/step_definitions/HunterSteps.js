const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante } = require("./../../app");
const { hunter } = require("./../../app")
/** Given */


Given('um Hunter de nome {string}', function(string){
    hunter.name = string
})
Given('ele sempre começa a viagem com {int} refeições', function(int){
    hunter.food =  int;
})
Given('ele sempre começa a viagem saudável', function(){
    hunter.isHealthy = true
})
// /** When */
When('o Hunter sair para caçar {int} vezes', function(int){
    for(let i = 0; i < int; i++){
        hunter.hunt()
    }
})
Then('a quantidade de refeições será igual a {int}', function (int) {
    assert.strictEqual(hunter.food, int)
    });


When('o Hunter parar para comer {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        hunter.eat();
    }
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(hunter.isHealthy, true)
});

Then('a quantidade de refeições será de {int}', function(int){
    assert.strictEqual(hunter.food, int);
})
Then('o Hunter ficará doente', function () {
    assert.strictEqual(hunter.isHealthy, false)
});

When('o Hunter cedeu {int} refeições', function (int) {
    hunter.giveFood(viajante)
});

When('parar para comer {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        hunter.eat()
    }
});

When('o Hunter foi caçar {int} vezes', function (int) {
    for(let i = 0; i < int; i++){
        hunter.hunt()
    }
});

Then('a quantidade de refeições deve ser {int}', function (int) {
    assert.strictEqual(hunter.food, int)
    });


Then('o Hunter segue saudável', function () {
    assert.strictEqual(hunter.isHealthy, false)
  });