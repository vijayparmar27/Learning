// const array = [2, 8, 5, 3, 9, 1]
// const array = [10, 11, 9, 8, 2, 7, 1];
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
let count = 0;
function heapSort(array) {

    if (array.length <= 1) return array;

    let i = 0;
    while (i != array.length) {

        if (array[(2 * i + 1)] > array[i] || array[(2 * i + 2)] > array[i]) {
            if (
                array[(2 * i + 1)] > array[(2 * i + 2)] ||
                array[(2 * i + 2)] === undefined
            ) {
                const temp = array[i];
                array[i] = array[(2 * i + 1)];
                array[(2 * i + 1)] = temp;

            } else {
                const temp = array[i];
                array[i] = array[(2 * i + 2)];
                array[(2 * i + 2)] = temp;
            }

            i = i - 2;
            i = i < 0 ? 0 : i
            continue;
        }
        i++;
    }

    const temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp

    const lastValue = array.pop();

    const data = heapSort(array)

    return [...data, lastValue];
}

const val = heapSort(array)

console.log(`---- val :: `, val);
