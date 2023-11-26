// function maxSubArray(nums: number[]): number {
//   let maxSum = nums[0];
//   let sum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let value = sum + nums[i];

//     // console.log(`--------------------------------------`)
//     // console.log(`---- value :: `,value)
//     // console.log(`---- nums[i] :: `,nums[i])
//     // console.log(`---- sum :: `,sum)
//     // console.log(`---- value > nums[i] :: `,value > nums[i])

//     if (value < nums[i]) {
//       sum = nums[i];
//       maxSum = Math.max(maxSum, nums[i]);
//     }else{
//         sum = value;
//         maxSum = Math.max(maxSum, value);
//     }
//   }

//   return maxSum;
// }

function maxSubArray(nums: number[]): number {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
// console.log(maxSubArray([8, -19, 5, -4, 20])); //21
// console.log(maxSubArray([1, -2, 0])); // 1
// console.log(maxSubArray([-1, -2])); // -1
// console.log(maxSubArray([-2, -1])); // -1
// console.log(maxSubArray([-2, 1])); // 1
// console.log(maxSubArray([-1, 0])); //0
// console.log(maxSubArray([-1, -1, -2, -2])); //-1
// console.log(maxSubArray([3, 2, -3, -1, 1, -3, 1, -1])); //5
