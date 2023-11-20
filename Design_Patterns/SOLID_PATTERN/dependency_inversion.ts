/**
 *  high-level modules should not depend on low-level modules, but both should depend on abstractions
 */

// Define an interface for the low-level module
interface LowLevelModuleInterface {
    doSomething(): void;
  }
  
  // Implement the low-level module with a concrete class
  class LowLevelModule implements LowLevelModuleInterface {
    doSomething(): void {
      console.log("Low-level module is doing something.");
    }
  }
  
  // High-level module depends on the interface
  class HighLevelModule {
    private lowLevelModule: LowLevelModuleInterface;
  
    // Inject the low-level module through the constructor
    constructor(lowLevelModule: LowLevelModuleInterface) {
      this.lowLevelModule = lowLevelModule;
    }
  
    // Use the low-level module
    performAction(): void {
      console.log("High-level module is performing an action.");
      this.lowLevelModule.doSomething();
    }
  }
  
  // Create instances and wire everything together
  const lowLevelModule = new LowLevelModule();
  const highLevelModule = new HighLevelModule(lowLevelModule);
  
  // Use the high-level module
  highLevelModule.performAction();
  