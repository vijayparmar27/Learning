let myNumber = {
    [Symbol.iterator]() {
        let n = 0;
        done = false;
        return {
            next() {
                n += 10;
                if (n == 100) { done = true }
                return { value: n, done: done };
            }
        };
    }
}

// for (let value of myNumber) {
//     console.log(`--- myNumber :: value :: `, value)
// }

let iterableFunction = function () {
    let i = 0;
    return {
        next: function () {
            return {
                done: i >= 3,
                value: i++ === 0 ? 'b' : 'a'
            };
        },
        [Symbol.iterator]: function () {
            return this;
        }
    }
}

for (let value of iterableFunction()) {
    console.log(`--- iterableFunction :: value :: `, value);
}