function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[left] + nums[right];

            if (currentSum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

const nums1: number[] = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1));  // Output: [[-1, -1, 2], [-1, 0, 1]]

// const nums2: number[] = [0, 1, 1];
// console.log(threeSum(nums2));  // Output: []

// const nums3: number[] = [0, 0, 0];
// console.log(threeSum(nums3));  // Output: [[0, 0, 0]]