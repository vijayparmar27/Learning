
// ================================================================= Basic TS =====================================================

let sale = 123_456             // auto defined
let sales: number = 123_456    // manual defined

let istrue = true              // auto defined
let istrue1: boolean = true    // manual defined

let level;       // any type (avoid any type)


//----------------- any type function --------------

function render(document: any): void {
    console.log(document)
}

//------------------------------------------------------------------------ Array --------------------------------------------------------

let number = [1, 2, 3]               //auto defined number[]
let number1: number[] = [1, 2, 3]     // manual defined number[]

// number1[0] = 5                  // value update
// number1[0] = '5'                // give error 

// console.log(number1)

//___________________________Tuple Type __________________________

let user = [1, 'vijay']                      // auto defined (string | number)[]
let user1: [number, string] = [1, 'vijay']     // fisrt agr : number second arg : string manual defined


let array = [1, 2, '3', true]                                                                       // auto defiend (string | number | boolean)[]
let array_1: (string | number | boolean | (string | number)[])[] = [1, 2, '3', true, [1, "2"]]        // manual defined


//------------------------------------------------- Enum --------------------------------------------------

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum size {small,medium,large}  //auto set small = 0 ,midium = 1, large = 2
// const enum size {small = 2,medium,large}  //auto set small = 2 ,midium = 3, large = 4
const enum size { small = 'l', medium = 'm', large = 'l' }  //manual  set small = l ,midium = m, large = l

let mySize: size = size.large;

// console.log(mySize)


// -----------------------=---------------------- function -------------------------------------------

function calculateTax(income: number): number {                 // parameter type defined compulsory also return type
    return 0
}

function calculateTax1(income: number, taxYear?: number): number | void {
    if ((taxYear || 2022) < 2022) {
        return income
    }
    // return income*1.3
}
function calculateTax2(income: number, taxYear: number = 2021): number | void {
    if (taxYear < 2022) {
        return income
    }
    return 27;
}


// console.log(calculateTax2(1000))

//-------------------------------------------- object --------------------------------------------------

let employee = {                          // auto set let employee: {name: string;dev: string;id: number; retire: (date: Date) => void;}
    name: 'swaggy',
    dev: 'nodejs',
    id: 27,
    retire: (date: Date) => {
        console.log(Date.now())
    }
}

let employee1: {                         // manual set let employee: {name: string;dev: string;id: number;}
    readonly name: string;                // name only read not write
    dev: string;
    id: number;
    retire: (date: Date) => void
} = {
    name: 'swaggy',
    dev: 'nodejs',
    id: 27,
    retire: (date: Date) => {
        console.log(Date.now())
    }
}


// ===================================================== Advanced Types ==================================================


//---------------------------------------------- Type Aliases ----------------------------------------------

type Employee = {
    readonly name: string;                // defined type of object 
    dev: string;
    id: number;
    retire: (date: Date) => void
}

let employee2: Employee = {               // set type of object
    name: 'swaggy',
    dev: 'nodejs',
    id: 27,
    retire: (date: Date) => {
        console.log(Date.now())
    }
}


//--------------------------------------------- Intersection Type -------------------------------

type gameName = {
    name: string
    // name : 'unvworld'
}

type company = {
    companyName: string

}

type game = gameName & company;

let userPlayGame: game = {
    name: 'unvworld',
    companyName: 'artoon'
}

// console.log(userPlayGame)

//---------------------------------------------- Union Type --------------------------------------

function kgToLbs(weight: number | string): number {
    if (typeof weight == 'number') {
        return weight
    }
    return parseInt(weight)
}

// console.log(kgToLbs('10kg'));
// console.log(kgToLbs(27));

//---------------------------------------------Literal Types ------------------------------

let quantity = 50                     // auto set let quantity:number

let quantity1: number = 50           // manual set

let quantity2: 50 = 50               // Literal type for defined value 
// let quantity3 : 50 = 51               // error 

let quantity4: 50 | 100 = 100        // literal type with Union type

let metric: 'cm' | 'm' = 'm'


//------------------------------------------- Nullable Type -------------------------------

function greet(name: string | null | undefined): void {
    if (name) {
        console.log(`good morning ${name}`)
    }
    else {
        console.log('good morning')
    }
}

// greet('vijay');
// greet(null);
// greet(undefined);

//---------------------------------------- Optinal Chaining ---------------------

// type customer = {
//     birthday: Date
// }
type customer = {
    birthday?: Date
}

function getCustomer(id: number): customer | null | undefined {
    return id == 0 ? null : { birthday: new Date() }
}

// let Customer = getCustomer(0);
let Customer = getCustomer(1);

// if (Customer !== null && Customer !== undefined ) {
//     console.log(Customer.birthday)
// }

// optional property access oprator

// console.log(Customer)
// console.log(Customer?.birthday?.getFullYear());

let log: any = null;

log?.('1')                  // if log has a function that only execute 


// -------------------------------------------- nullish coaelscing operator ------------------------------

let speed: number | null = null;
// let speed: number | null = 0;
// let speed: number | null | undefined= undefined;
// let speed: number | null | undefined | boolean= false;

let ride = {
    speed: speed || 30,                                           // speed value is falsy then take speed = 30
    // speed : speed ?? 30,
}

// console.log(ride);

// Falsy (undefined,null,false,0)


// let speed1: number | null = 0;
let speed1: number | null | undefined | boolean = false;
// let speed1: number | null = null;
// let speed1: number | null | undefined= undefined;

let ride1 = {
    speed: speed1 ?? 30,                                       //if nullish coaelscing operator use only value tack 30 when speed1 = null
}

// console.log(ride1);

//----------------------------------------- Type Assertion -----------------------------

//HTMLElement 
//HTMLInputElement

// let phone = document.getElementById('phone') as HTMLInputElement;

// let phone1 =<HTMLInputElement> document.getElementById('phone')

// const phoneVal = phone.value
// const phoneVal1 = phone1.value

interface IuserSchema {
    name1: string;
    email: string;
    password: string;
}

const body= {
    name1: "",
    email: "",
    password: ""
}



const { name1 , email, password } = body                 // auto set type { name1 , email, password } is any

// const body:IuserSchema = {
//     name1: "",
//     email: "",
//     password: ""
// }

// if data get from database then 
// const { name1, email, password } = body as IuserSchema;


//------------------------------------ The Unknown Type ------------------------------------

// let wordDocument : number 

function render1(document: unknown) {
    if (typeof document === 'string') {
        console.log('string type')
    }
    // if(document instanceof  wordDocument ){
    //     console.log('instanceof')
    // }
}

// render1('')
// render1(1)

function buy(item: unknown): number | void {
    if (item) {
        return 27;
    } else {
        console.log('item is missing');
    }
}

// console.log(buy(1));
// buy(undefined);
// buy(null);

//-------------------------------------- Never Type -------------------------------------

function reject(message: string): never {
    console.log('never return');
    throw new Error(message);
}

// after code is not execute 
reject('error');
console.log('call reject function after code is not execute');