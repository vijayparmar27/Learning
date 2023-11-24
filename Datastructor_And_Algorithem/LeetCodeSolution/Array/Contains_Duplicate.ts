// function containsDuplicate(nums: number[]): boolean {

//     const array: number[] = []
//     for (let i = 0; i < nums.length; i++) {
//         if (array.includes(nums[i])) {
//             return true;
//         }
//         array.push(nums[i]);
//     }

//     return false;

// };


// function containsDuplicate(nums: number[]): boolean {
//     const value = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (value.has(nums[i])) {
//             return true;
//         }
//         value.add(nums[i]);
//     }
//     return false;
// };

// function containsDuplicate(nums: number[]): boolean {
//     const value = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (value.has(nums[i])) {
//             return true;
//         }
//         value.add(nums[i]);
//     }
//     return false;
// };

// function containsDuplicate(nums: number[]): boolean {
//     let set = new Set();
//     for (const num of nums) {
//         if (set.has(num)) return true;
//         set.add(num);
//     }
//     return false;
// };

function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))