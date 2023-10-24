// const v8 = require('v8');
// const sizeof = require('object-sizeof')

// // const yourVariable = ["a"]; // Replace this with your variable
// const yourVariable = "a"; // Replace this with your variable

// // Get the memory usage of yourVariable
// const memoryUsage = v8.serialize(yourVariable).byteLength;

// console.log(`The variable uses ${memoryUsage} bytes.`);

// // console.log(Buffer.byteLength(yourVariable, "utf8"));

// // console.log(new Blob(["123"]).size);

// const sizeInt = sizeof("a12322131335156435")
// console.log(`Size of the int: ${sizeInt} bytes`)

// const sizeObj = sizeof(["a"])
// console.log(`Size of the object: ${sizeObj} bytes`)



const str = "yajiv ih";

function reverseString() {
    // let variable = "";

    // for (let i = str.length - 1; i >= 0; i--) {
    //     variable = variable.concat(str[i])
    // }

    // const variable = str.split("").reverse().join("")

    const variable = [...str].reverse().join("");

    console.log("variable: ", variable)
}

// reverseString()


const arr1 = ["a", "b", "c", "d", "e"];
const arr2 = ["f", "g", "h", "i"];

function mergeArrays() {

    // const mergeArray = [...arr1, ...arr2];
    let mergeArray = [...arr1]

    arr2.map((k) => { mergeArray.push(k) })
    console.log("mergeArray :: ", mergeArray);

}

// mergeArrays();


const arr3 = [0, 3, 4, 31];
const arr4 = [4, 6, 30]
const newMergeArray = [7, 5, 1, 0, 5, 8, 9, 0, 0, 1, 2, 0];

function mergeSortingArray(newMergeArray1, index = 0, curentIndex = 0) {

    const newMergeArray = [...arr3, ...arr4];

    newMergeArray.sort((a, b) => a - b);
    console.log("mergeSortingArray :: newMergeArray :: ", newMergeArray)


    // manual logic for sorting
    // if (newMergeArray1[index] > newMergeArray1[index + 1]) {

    //     newMergeArray1[index] = newMergeArray1[index] + newMergeArray1[index + 1]
    //     newMergeArray1[index + 1] = newMergeArray1[index] - newMergeArray1[index + 1]
    //     newMergeArray1[index] = newMergeArray1[index] - newMergeArray1[index + 1]

    //     curentIndex == 0 ?
    //         mergeSortingArray(newMergeArray1, 1, 1) : mergeSortingArray(newMergeArray1, index - 1, curentIndex)
    // } else {
    //     curentIndex++;
    //     if (curentIndex > newMergeArray1.length - 1) {
    //         console.log("done 1")
    //         console.log("done :: newMergeArray :: ", newMergeArray);
    //         return;
    //     }
    //     mergeSortingArray(newMergeArray1, curentIndex, curentIndex)
    // }

}

// mergeSortingArray(newMergeArray);

// for merge sorted array
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

// const arrData = mergeSortedArrays([0, 3, 4,5,9, 31], [3, 4, 6, 30]);

// console.log("---- arrData :: ", arrData)

const arr5 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const arr5 = [2, 5, 1];

function firstRecurtionNumber() {
    const obj = {}
    for (let i = 0; i < arr5.length; i++) {


        if (obj[arr5[i]] === undefined) {
        // if (!obj.hasOwnProperty(`${arr5[i]}`)) {
        // if (!(`${arr5[i]}` in obj)) {
            obj[arr5[i]] = ""
        } else {
            console.log("--->> already exist :: ", arr5[i]);
            return;
        }

    }
    console.log("--- obj :: ", undefined)
}

// firstRecurtionNumber();