/**
 * The Flyweight Design Pattern is a structural pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects. It is particularly useful when a large number of similar objects need to be created, and the goal is to reduce the memory footprint or improve performance by sharing common parts of objects
 */

// Flyweight interface
interface CoffeeOrder {
    serveCoffee(context: CoffeeContext): void;
}

// Concrete Flyweight
class CoffeeFlavor implements CoffeeOrder {
    private flavor: string;

    constructor(flavor: string) {
        this.flavor = flavor;
    }

    serveCoffee(context: CoffeeContext): void {
        console.log(`Serving coffee flavor ${this.flavor} to table #${context.tableNumber}`);
    }
}

// Context class
class CoffeeContext {
    constructor(public tableNumber: number) { }
}

// Flyweight Factory
class CoffeeFlavorFactory {
    private flavors: { [key: string]: CoffeeFlavor } = {};

    getCoffeeFlavor(flavor: string): CoffeeFlavor {
        if (!this.flavors[flavor]) {
            this.flavors[flavor] = new CoffeeFlavor(flavor);
        }
        return this.flavors[flavor];
    }

    getFlavorCount(): number {
        return Object.keys(this.flavors).length;
    }
}

// Client code
const coffeeFlavorFactory = new CoffeeFlavorFactory();
const orders: CoffeeOrder[] = [];

orders.push(coffeeFlavorFactory.getCoffeeFlavor("Cappuccino"));
orders.push(coffeeFlavorFactory.getCoffeeFlavor("Latte"));
orders.push(coffeeFlavorFactory.getCoffeeFlavor("Cappuccino"));
orders.push(coffeeFlavorFactory.getCoffeeFlavor("Espresso"));
orders.push(coffeeFlavorFactory.getCoffeeFlavor("Latte"));

// Serving coffee
const context = new CoffeeContext(1);
for (const order of orders) {
    order.serveCoffee(context);
}

console.log(`Number of unique coffee flavors: ${coffeeFlavorFactory.getFlavorCount()}`);



