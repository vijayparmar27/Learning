
/**
 * The Facade Design Pattern is a structural design pattern that provides a simplified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use. The facade pattern is particularly useful when dealing with a complex system with many components and you want to provide a simplified interface for clients to interact with the system
 */
// Subsystem 1
class Light {
    turnOn() {
        console.log("Light is ON");
    }

    turnOff() {
        console.log("Light is OFF");
    }
}

// Subsystem 2
class AirConditioner {
    start() {
        console.log("Air Conditioner is ON");
    }

    stop() {
        console.log("Air Conditioner is OFF");
    }
}

// Facade
class HomeAutomationFacade {
    private light: Light;
    private ac: AirConditioner;

    constructor() {
        this.light = new Light();
        this.ac = new AirConditioner();
    }

    // Simplified methods for the client
    activateHome() {
        this.light.turnOn();
        this.ac.start();
    }

    deactivateHome() {
        this.light.turnOff();
        this.ac.stop();
    }
}

// Client code
const homeFacade = new HomeAutomationFacade();

// Turning on the home automation
homeFacade.activateHome();

// Turning off the home automation
homeFacade.deactivateHome();


// Subsystem 3
class SecuritySystem {
    arm() {
        console.log("Security System is armed");
    }

    disarm() {
        console.log("Security System is disarmed");
    }
}

// Subsystem 4
class MusicSystem {
    playMusic() {
        console.log("Music System is playing music");
    }

    stopMusic() {
        console.log("Music System stopped");
    }
}

// Updated Facade
class AdvancedHomeAutomationFacade {
    private light: Light;
    private ac: AirConditioner;
    private security: SecuritySystem;
    private music: MusicSystem;

    constructor() {
        this.light = new Light();
        this.ac = new AirConditioner();
        this.security = new SecuritySystem();
        this.music = new MusicSystem();
    }

    // Advanced methods
    activateHomeWithSecurity() {
        this.light.turnOn();
        this.ac.start();
        this.security.arm();
    }

    activateHomeWithMusic() {
        this.light.turnOn();
        this.ac.start();
        this.music.playMusic();
    }

    activateFullHome() {
        this.light.turnOn();
        this.ac.start();
        this.security.arm();
        this.music.playMusic();
    }

    deactivateHome() {
        this.light.turnOff();
        this.ac.stop();
        this.security.disarm();
        this.music.stopMusic();
    }
}

// Client code
const advancedHomeFacade = new AdvancedHomeAutomationFacade();

// Activating home with security
advancedHomeFacade.activateHomeWithSecurity();

// Activating home with music
advancedHomeFacade.activateHomeWithMusic();

// Activating full home automation
advancedHomeFacade.activateFullHome();

// Deactivating home
advancedHomeFacade.deactivateHome();
