/**
 * Factory Design Pattern deals with creating individual objects, while the Abstract Factory Design Pattern deals with creating families of related or dependent objects.
 */

// Shape interface
interface Shape {
    draw(): void;
}

// Circle class implementing Shape
class Circle implements Shape {
    draw() {
        console.log("Drawing Circle");
    }
}

// Square class implementing Shape
class Square implements Shape {
    draw() {
        console.log("Drawing Square");
    }
}

// Theme interface
interface Theme {
    applyTheme(): void;
}

// LightTheme class implementing Theme
class LightTheme implements Theme {
    applyTheme() {
        console.log("Applying Light Theme");
    }
}

// DarkTheme class implementing Theme
class DarkTheme implements Theme {
    applyTheme() {
        console.log("Applying Dark Theme");
    }
}

// Abstract Factory interface
interface AbstractFactory {
    createShape(): Shape;
    createTheme(): Theme;
}

// Concrete implementation of AbstractFactory for Light Theme
class LightThemeFactory implements AbstractFactory {
    createShape(): Shape {
        return new Circle(); // For simplicity, always create a Circle with LightTheme
    }

    createTheme(): Theme {
        return new LightTheme();
    }
}

// Concrete implementation of AbstractFactory for Dark Theme
class DarkThemeFactory implements AbstractFactory {
    createShape(): Shape {
        return new Square(); // For simplicity, always create a Square with DarkTheme
    }

    createTheme(): Theme {
        return new DarkTheme();
    }
}

// Client code
function createAndDraw(factory: AbstractFactory): void {
    const shape: Shape = factory.createShape();
    const theme: Theme = factory.createTheme();

    theme.applyTheme();
    shape.draw();
}

// Using LightThemeFactory
const lightThemeFactory: AbstractFactory = new LightThemeFactory();
createAndDraw(lightThemeFactory);

// Using DarkThemeFactory
const darkThemeFactory: AbstractFactory = new DarkThemeFactory();
createAndDraw(darkThemeFactory);
