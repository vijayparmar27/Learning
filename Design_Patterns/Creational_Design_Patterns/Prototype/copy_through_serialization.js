class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }

    toString() {
        return `Address: ${this.streetAddress}, ` +
            `${this.city}, ${this.country}`;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address; //!
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }

    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
            `I live at ${this.address.toString()}`
        );
    }
}

class Serializer {

    constructor(types) {

        // console.log(`----- Serializer :: constructor :: `, types);
        this.types = types;
    }

    markRecursive(object) {

        let index = this.types.findIndex(t => {
            return t.name === object.constructor.name;
        });


        if (index !== -1) {
            object['typeIndex'] = index;

            // console.log(`----- Serializer :: index :: `, index);
            // console.log(`----- Serializer :: object['typeIndex'] :: `, object);
            for (let key in object) {
                // console.log(`----- Serializer :: key :: `, key);

                if (object.hasOwnProperty(key) && object[key] !== null) {
                    this.markRecursive(object[key]);
                }

            }

            // console.log(`----- Serializer :: key :: `, key);

        }
    }

    reconstructRecursive(object) {
        // console.log(`----- Serializer :: reconstructRecursive :: object :: `, object);

        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object["typeIndex"]];

            let obj = new type();

            // console.log(`----- Serializer :: reconstructRecursive :: `, obj);

            for (let key in obj) {
                if (object.hasOwnProperty(key) && object[key] != null) {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }


    clone(object) {
        // console.log(`----- Serializer :: clone :: `, object);
        // console.log(`----- Serializer :: object.constructor.name :: `, object.constructor.name);

        this.markRecursive(object)
        // console.log(`----- Serializer :: clone :: `, object);

        let copy = JSON.parse(JSON.stringify(object));

        return this.reconstructRecursive(copy);

    }


}



let john = new Person('John',
    new Address('123 London Road', 'London', 'UK'));

let s = new Serializer([Person, Address]);

let jane = s.clone(john);

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St'; // oops

console.log(john.toString()); // oops, john is called 'jane'
console.log(jane.toString());
