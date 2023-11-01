function findFactorial(number) {
    if (number > 1) {
        return number * findFactorial(number - 1);
    }
    else {
        return 1
    }
}
const data = findFactorial(5)
console.log(`--- findFactorial : `, data)