/**
 * The Command pattern is a behavioral design pattern that turns a request into a stand-alone object, allowing for parameterization of clients with different requests, queuing of requests, and logging of the parameters of a request
 */

// Command interface
interface Command {
    execute(): void;
}

// ConcreteCommand class
class ConcreteCommand implements Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.action();
    }
}

// Receiver class
class Receiver {
    action(): void {
        console.log('Receiver: Performing action');
    }
}

// Invoker class
class Invoker {
    private command: Command | null = null;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log('Invoker: No command set');
        }
    }
}

// Client code
const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker();

invoker.setCommand(command);
invoker.executeCommand();
