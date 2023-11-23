/**
 * The Memento design pattern is a behavioral pattern that provides the ability to restore an object to its previous state.
 */

// Memento
class Memento1 {
    constructor(private state: string) { }

    getState(): string {
        return this.state;
    }
}

// Originator
class Originator {
    private state: string;

    setState(state: string): void {
        console.log(`Setting state to: ${state}`);
        this.state = state;
    }

    save(): Memento1 {
        console.log(`Saving state...`);
        return new Memento1(this.state);
    }

    restore(memento: Memento1): void {
        console.log(`Restoring state...`);
        this.state = memento.getState();
    }

    showState(): void {
        console.log(`Current State: ${this.state}`);
    }
}

// Caretaker
class Caretaker {
    private mementos: Memento1[] = [];

    addMemento(memento: Memento1): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): Memento1 | undefined {
        return this.mementos[index];
    }
}

// Example usage
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State 1');
caretaker.addMemento(originator.save());
originator.showState();

originator.setState('State 2');
caretaker.addMemento(originator.save());
originator.showState();

originator.restore(caretaker.getMemento(0)!);
originator.showState();
