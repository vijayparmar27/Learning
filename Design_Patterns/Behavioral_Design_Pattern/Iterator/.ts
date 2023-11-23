/**
 * an object that can be used to loop through collections, like ArrayList and HashSet
 */

// ConcreteAggregate class with [Symbol.iterator] implementation
class ConcreteAggregate<T> implements Iterable<T> {
    private collection: T[] = [];

    addItem(item: T): void {
        this.collection.push(item);
    }

    // Implementing [Symbol.iterator] to make the object iterable
    [Symbol.iterator](): Iterator<T> {
        let index = 0;

        return {
            next: (): IteratorResult<T> => {
                if (index < this.collection.length) {
                    return {
                        value: this.collection[index++],
                        done: false,
                    };
                } else {
                    return {
                        value: undefined as any,
                        done: true,
                    };
                }
            },
        };
    }
}

// Client code
const aggregate = new ConcreteAggregate<number>();
aggregate.addItem(1);
aggregate.addItem(2);
aggregate.addItem(3);

// Using the for...of loop to iterate over the collection
for (const item of aggregate) {
    console.log('Next item:', item);
}
