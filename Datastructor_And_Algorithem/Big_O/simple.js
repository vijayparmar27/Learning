const array = new Array(100000).fill("data");

function LinearTimeFunction(array) {
    const t1 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "data") {
            console.log("Found function")
        }
    }
    const t2 = performance.now();

    console.log(`parformance :: this function :: ${t2 - t1} milliconds.`)
    console.log(`parformance :: this function :: ${(t2 - t1) / 1000} seconds.`)
}

// LinearTimeFunction(array) 

/**
* Big O(n) --- Linear Time  | /
*                           |/___
*/


function ConstantsTimeFunction(array) {
    console.log(`--- constant time function :: array[0] ::`, array[0])
    console.log(`--- constant time function :: array[1] ::`, array[1])
}

ConstantsTimeFunction(array) // 
/**
 * Big O(2) --- contant time |_____
 *                           |_____
 */

// worst case BIG O

function worstCaseBIGOFunction(array) {
    const t1 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "data") {
            console.log("Found function")
            break;
        }
    }
    const t2 = performance.now();

    console.log(`parformance :: this function :: ${t2 - t1} milliconds.`)
    console.log(`parformance :: this function :: ${(t2 - t1) / 1000} seconds.`)
}

/**
 * worst case BIG O
 * BIG O (n)
 */

/**
 * remove contants
 */

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

/**
 * remove contants case BIG O
 * BIG O (n)
 */

/**
 * different terms of input
 */

function differentTermsOfInput(input1,input2) {
    input1.map((item) => console.log(item));  // O(n)
    input2.map((item) => console.log(item));  // O(m)
}

/**
 * different terms of input case BIG O
 * BIG O (n + m)
 */