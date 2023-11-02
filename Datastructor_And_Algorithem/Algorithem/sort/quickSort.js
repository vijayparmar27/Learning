// const array = [10, 11, 9, 8, 2, 7, 1];
// const array = [3, 7, 8, 5, 2, 1, 9, 5, 4];
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = array.length - 1
    let i = 0;
    while (pivotIndex != i) {
        if (array[pivotIndex] < array[i]) {
            const temp = array[pivotIndex];
            array[pivotIndex] = array[i];
            array[i] = array[pivotIndex - 1];
            array[pivotIndex - 1] = temp;
            pivotIndex = pivotIndex - 1;
        } else {
            i++;
        }

    }

    const pivotValue = array[pivotIndex];

    let left = array.splice(0, pivotIndex);
    let right = array.splice(1);


    left = quickSort(left)
    right = quickSort(right)
    
    return [...left, pivotValue, ...right]
}

const value = quickSort(array);

console.log("------ value :: ", value);


