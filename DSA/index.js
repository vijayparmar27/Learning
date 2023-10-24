console.log("a");
setTimeout(() => {
    console.log("c")
}, 0)

Promise.all([console.log("d")])

console.log("b")