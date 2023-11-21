// /**
//  * 
// The Composite Design Pattern is a structural pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.
//  */

// // Component
// interface Graphic {
//     draw(): void;
// }

// // Leaf
// class Circle implements Graphic {
//     constructor(private name: string) { }

//     draw() {
//         console.log(`Drawing Circle: ${this.name}`);
//     }
// }

// // Leaf
// class Square implements Graphic {
//     constructor(private name: string) { }

//     draw() {
//         console.log(`Drawing Square: ${this.name}`);
//     }
// }

// // Composite
// class CompositeGraphic implements Graphic {
//     private children: Graphic[] = [];

//     add(graphic: Graphic) {
//         this.children.push(graphic);
//     }

//     draw() {
//         console.log('Drawing Composite Graphic:');
//         this.children.forEach((child) => {
//             child.draw();
//         });
//     }
// }

// // Client code
// const circle1 = new Circle('Circle 1');
// const circle2 = new Circle('Circle 2');
// const square1 = new Square('Square 1');
// const square2 = new Square('Square 2');

// const composite = new CompositeGraphic();
// composite.add(circle1);
// composite.add(square1);

// const composite2 = new CompositeGraphic();
// composite2.add(circle2);
// composite2.add(square2);

// composite.add(composite2);

// // Drawing the entire structure
// composite.draw();
