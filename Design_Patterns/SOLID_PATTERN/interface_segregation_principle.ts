/**
 *  a client should not be exposed to methods it doesn't need
 */

// Interface segregation principle violation

// Interface defining methods for a worker
class WorkerInterface {
    work() { }
    eat() { }
}

// Manager class implementing WorkerInterface
class Manager implements WorkerInterface {
    work() {
        console.log("Manager is working");
    }

    eat() {
        console.log("Manager is eating");
    }
}

// Programmer class implementing WorkerInterface
class Programmer implements WorkerInterface {
    work() {
        console.log("Programmer is coding");
    }

    eat() {
        console.log("Programmer is eating");
    }
}

// CEO class implementing WorkerInterface
class CEO implements WorkerInterface {
    work() {
        console.log("CEO is managing the company");
    }

    eat() {
        console.log("CEO is eating");
    }
}

// Here, the Manager, Programmer, and CEO are forced to implement both work and eat methods,
// even though a CEO might not need to implement these methods.

// -----------------------------------------------

// Applying the Interface Segregation Principle

// Separate interfaces for work and eat
class Workable {
    work() { }
}

class Eatable {
    eat() { }
}

// Manager class implementing Workable and Eatable interfaces
class Manager2 implements Workable, Eatable {
    work() {
        console.log("Manager is working");
    }

    eat() {
        console.log("Manager is eating");
    }
}

// Programmer class implementing only Workable interface
class Programmer2 implements Workable {
    work() {
        console.log("Programmer is coding");
    }
}

// CEO class implementing only Eatable interface
class CEO2 implements Eatable {
    eat() {
        console.log("CEO is eating");
    }
}

// Now, each class implements only the methods it needs, adhering to the Interface Segregation Principle.
