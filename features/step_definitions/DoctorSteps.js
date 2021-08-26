const {Given, When, Then} = require("@cucumber/cucumber")
const assert = require("assert");

const { viajante } = require("./../../app");
const { doctor } = require("./../../app");

Given('um Doctor de nome {string}', function (string) {
  doctor.nome = string
  });
Given('ele sempre começará a viagem com {int} refeição', function(int){
  doctor.food = int
})
Given('ele começa a viagem sempre saudável', function(){
  doctor.isHealthy = true
})

/*WHEN*/

When('um Doctor curar um viajante', function () {
  doctor.heal(viajante)
});

/*THEN*/

Then('o viajanta ficará saudável', function () {
  assert.strictEqual(viajante.isHealthy, true)
});

When('um Doctor comer {int} vez', function (int) {
    for(let i = 0; i < int; i++){
      doctor.eat()
    }
  });

  Then('ele continua saudável', function () {
    assert.strictEqual(doctor.isHealthy, true)
  });
