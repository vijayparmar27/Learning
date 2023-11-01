const array = [10, 3, 9, 8, 2, 7, 1];

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log(`----- Array :: `,array)