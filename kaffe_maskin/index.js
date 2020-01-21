

class CoffeeMachine {

  constructor() {
    this.pluggedIn = false;
    this.connectedToWater = false;
    this.startMachine = false;
    this.selectedBlackCoffee = false;
    this.selectedCoffeeWithMilk = false;
    this.selectedEspresso = false;
    this.pourCoffee = false;
    this.brewedCoffeeWithMilk = false;
    this.hasCapsule = false;
    this.brewedEspresso = false;
    this.insertedMoney = 0;
    this.amountOfCoffee = 0;
    this.amountOfMilk = 0;
    this.coffeePerCup = 13;
    this.milkPerCup = 10;
    this.priceForBlackCoffee = 10;
    this.priceForCoffeeWithMilk = 15;
    this.priceForEspresso = 20;
  }



  plugIn() {
    return this.pluggedIn = true;
  }

  connectToWater() {
    return this.connectedToWater = true;
  }
  pickedBlackCoffee() {
    return this.selectedBlackCoffee = true;
  }
  pickedCoffeeWithMilk() {
    return this.selectedCoffeeWithMilk = true;
  }
  pickedEspresso() {
    return this.selectedEspresso = true;
  }
  pressStart(buttonName) {
    return this.startMachine = true;
  }

  fillWithCoffee(amount) {

    return this.amountOfCoffee += amount;
  }

  checkIfEnoughCoffeeForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }



  insertMoney(inserted) {

    if (typeof inserted !== 'number') {
      throw (new Error('You must insert money'));
    }
    return this.insertedMoney += inserted;
  }

  addMilk() {
    return this.amountOfMilk >= this.milkPerCup;
  }

  brewCoffeeWithMilk() {
    return this.brewedCoffeeWithMilk = true;
  }

  capsuleCheck() {
    return this.hasCapsule = true;
  }

  brewEspresso() {
    return this.brewedEspresso = true;
  }

  dispenseCoffee(pourCoffee) {
    if (this.insertedMoney >= this.priceForBlackCoffee && this.startMachine == true || this.addedCard >= this.priceForBlackCoffee && this.startMachine == true) {
      this.pourCoffee = true;
      return this.pourCoffee
    }
    else if (this.insertedMoney >= this.priceForCoffeeWithMilk && this.startMachine == true || this.addedCard >= this.priceForCoffeeWithMilk && this.startMachine == true) {
      this.pourCoffee = true;
      return this.pourCoffee
    }
    else if (this.insertedMoney >= this.priceForEspresso && this.startMachine == true || this.addedCard >= this.priceForEspresso && this.startMachine == true) {
      this.pourCoffee = true;
      return this.pourCoffee
    }
  }
  checkIfEnoughMilkForACup() {
    return this.amountOfCoffee >= this.coffeePerCup;
  }

}


module.exports = CoffeeMachine;