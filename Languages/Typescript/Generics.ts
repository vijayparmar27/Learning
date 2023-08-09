
// -----------------------------------------------------------generics class ----------------------------------

class keyValuePair<T, U> {
    constructor(public key: T, public value: U) { }

    get() {
        console.log(`key:${this.key} and value : ${this.value}`)
    }
}

// let pair = new keyValuePair<number,string>(1,'val')

// pair.get();


//----------------------------------------------------generic function -----------------------------------

function wrapInArray<T>(value: T): T[] {
    return [value]
}

// console.log(wrapInArray<string>('swaggy'))


class ArrayUtils {
    static wrapInArray<T>(value: T): T[] {
        return [value]
    }
}

// console.log(ArrayUtils.wrapInArray<string>('swaggy'))


//----------------------------------------------- Generic Interfaces -----------------------------------------------------

interface keyPair<T, U> {
    key: T;
    value: U;
}

const keyValue: keyPair<number, string> = {
    key: 1,
    value: 'swaggy'
}


// console.log(keyValue);

// axios api call data

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: "null" };
}

const url = fetch<string>('url');

// console.log(url)

interface user {
    userName: string;
}

interface product {
    title: string;
}

const url1 = fetch<user>('url');
const url2 = fetch<product>('url');

url1.data?.userName
url2.data?.title


// ---------------------------------------- Generic Constrains ----------------------------------------


function echo<T extends number | string>(value: T): T {
    return value
}

// const val = echo(true);
const val = echo('1');  // only string or number
// console.log(val)

function echo1<T extends { name: string }>(value: T): T {
    return value
    // return 1                                                  //give error
}

const val1 = echo1({ name: "a" })

// console.log(val1)


interface person {
    name: string;
}

function echo2<T extends person>(value: T): T {
    return value;
}

const val2 = echo2({ name: "a" });

// console.log(val2);

class Person {
    constructor(public name: string) { }
}

class Customer_1 extends Person { }

function echo3<T extends Person>(value: T): T {
    return value;
}

// const val3 = echo3(new Person("swaggy"));

const val3 = echo3(new Customer_1("a"));

// console.log(val3)

// ------------------------------------- Extending Gemeric Classes -----------------------------------------

interface product_1 {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    add(obj: T): T[] {
        this._objects.push(obj);
        return this._objects
    }
}

const store = new Store<product_1>();
const addProduct = store.add({ name: "vijay", price: 20 });
// console.log(addProduct);

// Pass On the generic type paramiter

class CompressibleStore<T> extends Store<T>{
    compress() { }
}

const store1 = new CompressibleStore<product_1>();
store1.add({ name: "vijay", price: 20 });

// Restrict the generic type paramet
class searchableStore<T extends { name: string }> extends Store<T>{
    find(name: string): T | undefined {
        return this._objects.find((obj) => { obj.name === name })
    }
}

//Fix the generic type paramiter

class ProductStore extends Store<product> {
    filterBycategory(category: string): product[] {
        if (category) {
            return [];
        }
        return [];
    }
}

// ----------------------------------------------------- key operator --------------------------------------------

interface product_2 {
    name: string;
    price: number;
}

class Store3<T> {
    protected _object: T[] = [];
    add(obj: T): void {
        this._object.push(obj);
    }
    find(property: keyof T, value: unknown) {
        return this._object.find((obj) => {
            return obj[property] === value;
        });
    }
}

let store3 = new Store3<product_2>();

// store.add({name:'a',price:10});
// store.find('name','a');