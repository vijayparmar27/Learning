class Document {

}

class Machine {
    constructor() {

        if (this.constructor === 'Machine') {
            throw new Error('Machine is abstract');
        }
    }

    print(doc) { };
    fax(doc) { };
    scan(doc) { }
}

class MutiFuctionPrinter extends Machine {
    print(doc) { };

    fax(doc) { };

    scan(doc) { };
}

class NotImplementedError extends Error {
    constructor(name) {
        let msg = `${name} is not implemented`;
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError)
        }

    }
}

class OldFashinedPrinter extends Machine {
    constructor(){
        super();
        console.log(`${this.constructor.name}`)
    }
    print(doc) { };
    
    scan() {
        throw new NotImplementedError(`OldFashinedPrinter.scan`)
    }
}

const ne = new OldFashinedPrinter();

ne.scan();