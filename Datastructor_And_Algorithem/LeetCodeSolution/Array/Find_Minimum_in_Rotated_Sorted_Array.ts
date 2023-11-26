function findMin(nums: number[]): number {
  let index = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      index = i + 1;
      break;
    }
  }

  return nums[index];
}

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

console.log(findMin([11, 13, 15, 17]));