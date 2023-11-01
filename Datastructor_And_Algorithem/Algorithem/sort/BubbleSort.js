// const array = [10, 3, 9, 8, 2, 7, 1]
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            // const temp = array[j];
            // array[j] = array[j + 1];
            // array[j + 1] = temp;
            array[j] = array[j + 1] + array[j];
            array[j + 1] = array[j] - array[j + 1];
            array[j] = array[j] - array[j + 1];
        }
    }
}

console.log(`----- arrray :: `, array)