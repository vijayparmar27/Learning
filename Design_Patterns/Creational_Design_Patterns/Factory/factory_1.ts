/**
 * The Factory Design Pattern is a creational pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created
 */

// Product interface representing the objects the factory creates
interface Product {
    operation(): string;
  }
  
  // ConcreteProductA and ConcreteProductB implement the Product interface
  class ConcreteProductA implements Product {
    operation(): string {
      return 'ConcreteProductA';
    }
  }
  
  class ConcreteProductB implements Product {
    operation(): string {
      return 'ConcreteProductB';
    }
  }
  
  // Creator interface declares the factory method, which returns a Product
  interface Creator {
    factoryMethod(): Product;
  }
  
  // ConcreteCreatorA and ConcreteCreatorB implement the Creator interface
  class ConcreteCreatorA implements Creator {
    factoryMethod(): Product {
      return new ConcreteProductA();
    }
  }
  
  class ConcreteCreatorB implements Creator {
    factoryMethod(): Product {
      return new ConcreteProductB();
    }
  }
  
  // Client code uses the factory method to create products without knowing their concrete classes
  function clientCode(creator: Creator): void {
    const product = creator.factoryMethod();
    console.log(`Client: ${product.operation()}`);
  }
  
  // Example usage
  const creatorA = new ConcreteCreatorA();
  clientCode(creatorA);
  
  const creatorB = new ConcreteCreatorB();
  clientCode(creatorB);
  