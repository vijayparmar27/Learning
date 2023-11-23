// Iterator interface
interface Iterator<T> {
    // next(): T | null;
    next(): any;
    hasNext(): boolean;
}

// Aggregate interface
interface Aggregate<T> {
    createIterator(): Iterator<T>;
}

// ConcreteIterator class
class ConcreteIterator<T> implements Iterator<T> {
    private index: number = 0;

    constructor(private collection: T[]) { }

    // next(): T | null {
    next(): any {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.collection.length;
    }
}

// ConcreteAggregate class
class ConcreteAggregate<T> implements Aggregate<T> {
    private collection: T[] = [];

    addItem(item: T): void {
        this.collection.push(item);
    }

    createIterator(): Iterator<T> {
        return new ConcreteIterator(this.collection);
    }
}

// Client code
const aggregate = new ConcreteAggregate<number>();
aggregate.addItem(1);
aggregate.addItem(2);
aggregate.addItem(3);

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
    const nextItem = iterator.next();
    console.log('Next item:', nextItem);
}
