// function twoSum(nums: number[], target: number): number[] {

//     const result = new Map();
//     for (let i = 0; i < nums.length; i++) {

//         if (result.has(nums[i])) {
//             return [result.get(nums[i]), i]
//         }
//         result.set(target - nums[i], i)
//     }
//     return [];
// };

// function twoSum(nums: number[], target: number): number[] {

//     const result = new Map<number, number>(nums.map((nums, i) => [nums, i]));
//     for (let i = 0; i < nums.length; i++) {
//         if (result.has(target - nums[i]) && i !== result.get(target - nums[i])) {
//             return [i, result.get(target - nums[i]) as number]
//         }
//     }
//     return [0,0];
// };

function twoSum(nums: number[], target: number): number[] {

    const result: {
        [key: number]: number
    } = {};
    for (let i = 0; i < nums.length; i++) {
        if (result.hasOwnProperty(target - nums[i])) {
            return [result[target - nums[i]], i]
        }
        result[nums[i]] = i;
    }
    return [0, 0]
};




console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2, 3, 4], 6))
console.log(twoSum([3, 3], 6))