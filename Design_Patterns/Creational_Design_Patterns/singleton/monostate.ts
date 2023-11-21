class Singleton {
    private static instance: Singleton | null = null;
    private data: string;

    private constructor() {
        // Private constructor to prevent instantiation outside the class
        this.data = "Initial Data";
    }

    public static getInstance(): Singleton {
        // If an instance doesn't exist, create one; otherwise, return the existing instance
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    public getData(): string {
        return this.data;
    }

    public setData(newData: string): void {
        this.data = newData;
    }
}

// Example usage
const instance1 = Singleton.getInstance();
console.log(instance1.getData()); // Output: Initial Data

const instance2 = Singleton.getInstance();
console.log(instance2.getData()); // Output: Initial Data

// Check if both instances refer to the same object
console.log(instance1 === instance2); // Output: true

// Modify the data through one instance
instance1.setData("Modified Data");

// Check if the data is consistent across instances
console.log(instance1.getData()); // Output: Modified Data
console.log(instance2.getData()); // Output: Modified Data
