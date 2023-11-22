// Component interface
interface Graphic {
    draw(): void;
    getArea(): number;
}

// Leaf class
class Circle implements Graphic {
    constructor(private radius: number) { }

    draw(): void {
        console.log(`Drawing Circle with radius ${this.radius}`);
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Leaf class
class Square implements Graphic {
    constructor(private sideLength: number) { }

    draw(): void {
        console.log(`Drawing Square with side length ${this.sideLength}`);
    }

    getArea(): number {
        return this.sideLength * this.sideLength;
    }
}

// Leaf class
class Triangle implements Graphic {
    constructor(private base: number, private height: number) { }

    draw(): void {
        console.log(`Drawing Triangle with base ${this.base} and height ${this.height}`);
    }

    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}

// Composite class
class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];

    add(graphic: Graphic): void {
        this.children.push(graphic);
    }

    remove(graphic: Graphic): void {
        const index = this.children.indexOf(graphic);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    draw(): void {
        console.log('Drawing Composite Graphic:');
        this.children.forEach((child) => child.draw());
    }

    getArea(): number {
        return this.children.reduce((totalArea, child) => totalArea + child.getArea(), 0);
    }
}

// Client code
const circle1 = new Circle(5);
const circle2 = new Circle(3);
const square1 = new Square(4);
const triangle1 = new Triangle(4, 3);

const composite1 = new CompositeGraphic();
composite1.add(circle1);
composite1.add(square1);

const composite2 = new CompositeGraphic();
composite2.add(circle2);
composite2.add(triangle1);

const mainComposite = new CompositeGraphic();
mainComposite.add(composite1);
mainComposite.add(composite2);

console.log('Drawing main composite:');
mainComposite.draw();

const totalArea = mainComposite.getArea();
console.log(`Total Area of the main composite: ${totalArea}`);

console.dir(mainComposite, { depth: 5 })