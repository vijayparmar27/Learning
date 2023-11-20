/**
 * this principle is work on if create class and than if you need other fetures than create new class 
 * that ways code is readable and flexible
 * 
 * The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".
 */
const fs = require('fs');
const path = require("path");

class Journal {

    count = 0;

    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++this.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

}

class PersistenceManager {

    saveToFile(journal, filename) {
        console.log(`----->> fileName :: `, fileName)
        fs.writeFileSync(filename, journal.toString());
    }
}


let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p = new PersistenceManager();

let fileName = path.join(__dirname, "./journal.txt");

p.saveToFile(j, fileName);

