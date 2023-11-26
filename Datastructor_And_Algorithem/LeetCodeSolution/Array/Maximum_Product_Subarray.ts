function maxProduct(nums: number[]): number {
  let minValue = nums[0];
  let maxValue = nums[0];
  let maxProductValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let value = Math.min(nums[i], minValue * nums[i], maxValue * nums[i]);
    maxValue = Math.max(nums[i], minValue * nums[i], maxValue * nums[i]);
    minValue = value;
    if (maxValue > maxProductValue) {
      maxProductValue = maxValue;
    }
  }

  return maxProductValue;
}

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2,0,-1])) // 0
console.log(maxProduct([-2,3,-4])) // 24
