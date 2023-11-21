/**
 * The Adapter pattern is a structural design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.
 */

// Target interface
interface Target {
    request(): void;
}

// Adaptee (the class to be adapted)
class Adaptee {
    specificRequest(): void {
        console.log("Adaptee's specific request");
    }
}

// Adapter class
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): void {
        console.log("Adapter is converting the request");
        this.adaptee.specificRequest();
    }
}

// Client code
function clientCode(target: Target): void {
    target.request();
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter);
