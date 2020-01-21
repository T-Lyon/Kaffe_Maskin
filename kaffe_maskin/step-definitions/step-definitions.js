let CoffeeMachine = require('../index.js');
let myMachine = new CoffeeMachine();

module.exports = function () {

  this.Given(/^that the machine is plugged in$/, function () {

    myMachine.plugIn();

    assert.strictEqual(
      myMachine.pluggedIn,
      true,
      'Expected the property pluggedIn to be true after calling the plugIn() method.'
    );
  });

  this.Given(/^that water is available$/, function () {

    myMachine.connectToWater();

    assert.strictEqual(
      myMachine.connectedToWater,
      true,
      'Expected the property connectedToWater to be true after calling the connectToWater() method.'
    );
  });
  this.Given(/^that the user has selected black coffee$/, function () {
    myMachine.pickedBlackCoffee();

    assert.strictEqual(myMachine.selectedBlackCoffee, true, "Expected the user to select Black coffee");
  });
  this.Given(/^that the user has selected coffee with milk$/, function () {
    myMachine.pickedCoffeeWithMilk();

    assert.strictEqual(myMachine.selectedCoffeeWithMilk, true, "Expected the user to select coffee with milk");
  });
  this.Given(/^that the user has selected espresso$/, function () {
    myMachine.pickedEspresso();

    assert.strictEqual(myMachine.selectedEspresso, true, "Expected the user to select espresso");
  });
  this.When(/^presses the "([^"]*)" button$/, function (buttonName) {
    myMachine.pressStart();

    assert.strictEqual(myMachine.startMachine, true, "");
  });
  this.Given(/^that the machine has enough ground coffee$/, function () {

    myMachine.fillWithCoffee(100);

    assert.deepEqual(
      myMachine.checkIfEnoughCoffeeForACup(),
      true,
      'Expected to have enough coffee for a cup'
    );
  });
  this.When(/^the user inserts a (\d+) kr coin$/, function (amountOfMoney) {

    amountOfMoney /= 1;

    let moneyBefore = myMachine.insertedMoney;
    myMachine.insertMoney(amountOfMoney);
    assert.deepEqual(
      myMachine.insertedMoney,
      moneyBefore + amountOfMoney,
      "Expected the amount of money inserted to increase with the amount inserted"
    )
  });
  this.When(/^the user inserts (\d+) kr by card$/, function (amountOfMoney) {
    amountOfMoney /= 1;

    myMachine.insertMoney(amountOfMoney);
    assert.isAtLeast(myMachine.insertedMoney, myMachine.priceForBlackCoffee, 'Expected there will be enough money')
  });

  this.Then(/^the user receives (\d+) cup of black coffee\.$/, function (pourCoffee) {
    myMachine.dispenseCoffee();

    assert.strictEqual(myMachine.pourCoffee, true, "Here's your coffee");
  });
  this.Then(/^the user receives (\d+) cup of coffee with milk\.$/, function (pourCoffee) {
    myMachine.dispenseCoffee();

    assert.strictEqual(myMachine.pourCoffee, true, "Here's your coffee!");

  });
  this.Then(/^the user receives (\d+) cup of espresso\.$/, function (pourCoffee) {
    myMachine.dispenseCoffee();

    assert.strictEqual(myMachine.pourCoffee, true, "Here's your coffee!");
  });

  this.Then(/^that the machine has milk$/, function () {
    myMachine.addMilk(50);

    assert.deepEqual(
      myMachine.checkIfEnoughMilkForACup(),
      true,
      'Expected to have enough milk for a cup'
    );
  });
  this.Then(/^the user receives a cup of coffee with skimmed milk\.$/, function () {
    myMachine.brewCoffeeWithMilk();
    assert.strictEqual(myMachine.brewedCoffeeWithMilk, true, "Expected to be true");
  });
  this.Given(/^that the machine has a espresso capsule$/, function () {
    myMachine.capsuleCheck();
    assert.strictEqual(myMachine.hasCapsule, true, "Expected there to be a capsule");
  });
  this.Then(/^the user receives a cup of espresso$/, function () {
    myMachine.brewEspresso();
    assert.strictEqual(myMachine.brewedEspresso, true, "Expected to be true");
  });
}