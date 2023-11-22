/**
 * the decorator pattern is a structural pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class
 */

// Component interface
interface Coffee {
    cost(): number;
  }
  
  // Concrete Component
  class SimpleCoffee implements Coffee {
    cost() {
      return 5;
    }
  }
  
  // Decorator
  abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    abstract cost(): number;
  }
  
  // Concrete Decorator
  class MilkDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  // Another Concrete Decorator
  class SugarDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  // Usage
  const myCoffee: Coffee = new SimpleCoffee();
  console.log("Cost of simple coffee:", myCoffee.cost());
  
  const milkCoffee: Coffee = new MilkDecorator(myCoffee);
  console.log("Cost of coffee with milk:", milkCoffee.cost());
  
  const sugarMilkCoffee: Coffee = new SugarDecorator(milkCoffee);
  console.log("Cost of coffee with milk and sugar:", sugarMilkCoffee.cost());
  