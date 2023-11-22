// // Shape interface
// interface Shape {
//     draw(): void;
// }

// // Circle class implementing Shape
// class Circle implements Shape {
//     draw() {
//         console.log("Drawing Circle");
//     }
// }

// // Square class implementing Shape
// class Square implements Shape {
//     draw() {
//         console.log("Drawing Square");
//     }
// }

// // ShapeFactory interface
// interface ShapeFactory {
//     createShape(type: string): Shape;
// }

// // Concrete implementation of ShapeFactory
// class ConcreteShapeFactory implements ShapeFactory {
//     createShape(type: string): Shape {
//         if (type === "Circle") {
//             return new Circle();
//         } else if (type === "Square") {
//             return new Square();
//         } else {
//             throw new Error("Invalid shape type");
//         }
//     }
// }

// // Client code
// const shapeFactory: ShapeFactory = new ConcreteShapeFactory();

// const circle: Shape = shapeFactory.createShape("Circle");
// circle.draw();

// const square: Shape = shapeFactory.createShape("Square");
// square.draw();
