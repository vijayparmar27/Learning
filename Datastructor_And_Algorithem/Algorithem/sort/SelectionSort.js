const array = [10, 3, 9, 8, 2, 7, 1];

for (let i = 0; i < array.length; i++) {

    let minIndex = i;
    for (let j = 0; j < array.length; j++) {

        if (array[minIndex] > array[i + j]) {
            minIndex = i + j;
        }

    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
}

console.log(`----- arrray :: `, array);

for (let i = 0; i < array.length; i++) {

    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {

        if (array[minIndex] > array[j]) {
            minIndex = j;
        }

    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
}

console.log(`----- arrray :: `, array)