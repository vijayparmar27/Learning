const array = [10, 11, 9, 8, 2, 7, 1];

function merge(left, right) {
    const mergeArray = [];
    let i = 0;
    let j = 0;
    let arrrayValue1 = left[0];
    let arrrayValue2 = right[0];
    while (arrrayValue1 || arrrayValue2) {

        if (arrrayValue1 === undefined || arrrayValue1 > arrrayValue2) {

            mergeArray.push(right[j])
            arrrayValue2 = right[j + 1]
            j++;
        } else {
            mergeArray.push(left[i]);
            arrrayValue1 = left[i + 1]
            i++;
        }

    }
    console.log(`---- mergeArray :: `, mergeArray);

    return mergeArray;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const value = Math.floor(arr.length / 2);

    let left = mergeSort(arr.splice(0, value))
    let right = mergeSort(arr);


    return merge(left, right)

}

mergeSort(array);