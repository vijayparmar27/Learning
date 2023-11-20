class Person {
    constructor() {
        // address info
        this.streetAddress = this.postcode = this.city = '';

        // employment info
        this.companyName = this.position = '';
        this.annualIncome = 0;
    }

    toString() {
        return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n`
            + `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
    }
}

class PersonBuilder {
    constructor() {
        this.person = new Person();
    }

    get live() {
        return new PersonAddressBuilder(this.person);
    }

    get work() {
        return new PersonJobBuilder(this.person);
    }

    get build() {
        return this.person;
    }

}

class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super();
        this.person = person;
    }

    at(data) {
        this.person.companyName = data;
        return this;
    }

    atA(data) {
        this.person.position = data;
        return this;
    }

    earning(data) {
        this.person.annualIncome = data;
        return this;
    }

}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super();
        this.person = person;
    }

    at(data) {
        this.person.streetAddress = data;
        return this;
    }

    withPinCode(data) {
        this.person.postcode = data;
        return this;
    }

    atA(data) {
        this.person.city = data;
        return this;
    }

}

const info = new PersonBuilder();

const p = info
    .work.at("artoon").atA("developer").earning(15000)
    .live.at("shree_rajpara").atA("somnath").withPinCode("000000")
    .build.toString();

console.log(p)