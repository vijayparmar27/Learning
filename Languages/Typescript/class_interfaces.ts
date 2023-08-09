
//========================================================== Class ====================================================

class Account_5 {
    readonly id: number;           //public but read only not write
    owner: string;                 //public
    balance: number;               //public 
    amount?: number;
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposite(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            return console.log('deposite amount is', amount)
        }
        if (amount < 0) {
            return console.log('your account balance', amount)
        }
        return console.log('you account balance is too low', amount)
    }

    getBalance(): number {
        return this.balance
    }
}

const account = new Account_5(27, 'swaggy', 12)

// account.deposite(8);
// console.log(account.getBalance());
// console.log(account.balance);


// console.log(account instanceof Account)           // for check  account is instance of Account Class (true/false) 


// ---------------------------------------------- Access Control Keyword (set/get/static)--------------------------------

//public
//private
//protected

class Account_1 {
    static user: string = 'vijay'     // only use in static function

    constructor(public readonly id: number, public owner: string, private balance: number) { }

    set deposite(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
        else if (amount < 0) {
            console.log('your account balance', amount)
        }
        else {
            console.log('you account balance is too low', amount)
        }
    }

    get getBalance(): number {
        return this.balance
    }

    static userData(): void {
        console.log(`static function ${this.user}`)
    }
}

const account_1 = new Account_1(27, 'swaggy', 12)

// console.log(account_1.id)                 // readonly if we try to write like ( account_1.id = 00 ) give a error
account_1.deposite = 8                       //setter for set value
// console.log(account_1.getBalance)         // getter for get value


// Account_1.userData()

//------------------------------------------- Index Signature ---------------------------------

class SeatAssignment {
    //A1,A2,....
    //vijay,jagdish,....

    //index signature property
    [seatNumber: string]: string;
    // [x: number]: number;               
}

let seats = new SeatAssignment();

// for create object and set key and value

seats.A1 = 'vijay'
seats.A2 = 'swaggy'
seats.A3 = 'swaggy'
// seats[4] = 1;                 // if [x: number]: number then use 

// console.log(seats)


//---------------------------------------------- Inheritance --------------------------------


class Persion {
    constructor(protected firstName: string, protected lastName: string) { }

    get fullName(): string {
        const name = `${this.firstName} ${this.lastName}`;
        return name;
    }

    walk(): void {
        console.log("walking...");
    }
}

class Student extends Persion {
    constructor(firstName: string, lastName: string, public studentId: number) {
        super(firstName, lastName);
    }
    tackTest() {
        console.log("taking a test");
    }
}

class Teacher extends Persion {

    override get fullName(): string {
        const name = `professor ${this.firstName} ${this.lastName}`;
        return name;
    }
}

const student = new Student("nickname", "swaggy", 27);

const value = student.fullName;

// student.tackTest();
// console.log(value);

const teacher = new Teacher('vijay', 'parmar')

// console.log(teacher.fullName);


// -----------------------------------------Abstract Class And Method ------------------------------

abstract class Shape {
    constructor(public color: string) { }
    walk(): void {
        console.log('...........')
    }
    abstract render(): void;
}

class Circle extends Shape {                       // class inherented and also abstract defined contractor value is complesery defined in class in inherite class
    constructor(color: string) {
        super(color)
    }
    override render(): void {                     // class inherented and also abstract defined function is complesery defined in class in inherite class
        console.log('rendering a circle')
    }
}

const circle = new Circle('red')

// circle.walk();
// circle.render();


// ----------------------------------------------------Interface-----------------------------------

// abstract class Calender {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
// }

interface calender {
  name: string;
  addEvent(): void;
}

interface cloude extends calender {
  sync(): void;
}

class GoogleCalender implements cloude {
  constructor(public name: string) {}
  addEvent(): void {
      console.log('add Event')
  }
  sync(): void {
      console.log('cloude...')
  }
}

console.log('ts learn');