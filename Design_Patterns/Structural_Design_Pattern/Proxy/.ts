/**
 * The Proxy Design Pattern is a structural pattern that allows you to create a proxy class. The proxy class acts as a placeholder for another object, controlling access to it. The proxy class can also be used to add extra functionality
 */
// Subject interface
interface Image {
    display(): void;
}

// RealSubject
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImage();
    }

    private loadImage(): void {
        console.log(`Loading image: ${this.filename}`);
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }
}

// Proxy
class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Client code
const image1: Image = new ProxyImage("cat.jpg");
const image2: Image = new ProxyImage("dog.jpg");

// Image is loaded and displayed only when needed
image1.display(); // Loading image: cat.jpg, Displaying image: cat.jpg
image1.display(); // Displaying image: cat.jpg (already loaded)

image2.display(); // Loading image: dog.jpg, Displaying image: dog.jpg
