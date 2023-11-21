// /**
//  * The Bridge Design Pattern is a structural pattern that separates abstraction from implementation so that the two can vary independently. It is particularly useful when you want to avoid a permanent binding between an abstraction and its implementation and when both the abstraction and implementation need to be extended independently
//  */


// /**
//  * Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other
//  */

// // Abstraction
// interface Shape {
//     draw(): void;
// }

// // Concrete Abstraction
// class Circle implements Shape {
//     constructor(private color: Color) { }

//     draw() {
//         console.log(`Drawing Circle with ${this.color.fill()} color`);
//     }
// }

// class Square implements Shape {
//     constructor(private color: Color) { }

//     draw() {
//         console.log(`Drawing Square with ${this.color.fill()} color`);
//     }
// }

// // Implementation
// interface Color {
//     fill(): string;
// }

// // Concrete Implementation
// class RedColor implements Color {
//     fill() {
//         return 'Red';
//     }
// }

// class BlueColor implements Color {
//     fill() {
//         return 'Blue';
//     }
// }

// // Client code
// const redCircle = new Circle(new RedColor());
// redCircle.draw();

// const blueSquare = new Square(new BlueColor());
// blueSquare.draw();
