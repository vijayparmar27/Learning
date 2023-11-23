/**
 * Mediator design pattern is a behavioral pattern that defines an object that centralizes communication between other objects, avoiding direct connections between them
 */

// Mediator interface
interface Mediator {
    notify(sender: Colleague, event: string): void;
}

// Colleague interface
interface Colleague {
    setMediator(mediator: Mediator): void;
    send(event: string): void;
    receive(message: string): void;
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    addColleague(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    notify(sender: Colleague, event: string): void {
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(`[${sender.constructor.name}] sent ${event}`);
            }
        });
    }
}

// Concrete Colleague
class ConcreteColleague implements Colleague {
    private mediator: Mediator | undefined;

    constructor(private name: string) { }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    send(event: string): void {
        if (this.mediator) {
            console.log(`[${this.constructor.name}] sending ${event}`);
            this.mediator.notify(this, event);
        }
    }

    receive(message: string): void {
        console.log(`[${this.constructor.name}] received: ${message}`);
    }
}

// Example usage
const mediator = new ConcreteMediator();

const colleague1 = new ConcreteColleague('Colleague1');
const colleague2 = new ConcreteColleague('Colleague2');

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);

colleague1.setMediator(mediator);
colleague2.setMediator(mediator);

colleague1.send('Hello from Colleague1');
colleague2.send('Hi from Colleague2');
