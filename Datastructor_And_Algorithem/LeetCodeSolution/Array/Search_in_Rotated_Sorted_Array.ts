

// function search(nums: number[], target: number): number {
//     let index = -1;
//     let startIndex = 0;
//     let lastIndex = nums.length - 1;
//     if (nums.length == 1) {
//         return target === nums[0] ? 0 : -1;
//     }
//     if (nums.length <= 3) {
//         let midIndex = Math.floor((nums.length - 1) / 2);
//         return nums[midIndex] === target
//             ? midIndex
//             : nums[startIndex] == target
//                 ? startIndex
//                 : nums[lastIndex] == target
//                     ? lastIndex
//                     : -1;
//     }

//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let midIndex = Math.floor((lastIndex - startIndex) / 2) + startIndex;

//         // count++;
//         // if(count > 2){
//         //     break;
//         // }

//         index = nums[midIndex] === target
//             ? midIndex
//             : nums[startIndex] == target
//                 ? startIndex
//                 : nums[lastIndex] == target
//                     ? lastIndex
//                     : -1;
//         // console.log(`---- index :: `, index);

//         if (index !== -1) break;

//         console.log(`------------------------`);
//         // console.log(`---- nums :: `, nums)
//         console.log(`---- startIndex :: `, startIndex)
//         console.log(`---- lastIndex :: `, lastIndex)
//         console.log(`---- midIndex :: `, midIndex);
//         console.log(`---- target :: `, target)

//         console.log(`---- exe :: `, nums[midIndex] < target
//             && nums[startIndex] > target)
//         if (
//             nums[midIndex] < target
//             && nums[startIndex] > target
//         ) {
//             lastIndex = midIndex - 1;
//         }
//         else {
//             startIndex = midIndex + 1;
//         }

//     }

//     return index;
// }

function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);

        console.log(`------ left :: `, left)
        console.log(`------ right :: `, right)
        console.log(`------ mid :: `, mid)

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target is within the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                // Target is in the right half
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            // Check if the target is within the right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                // Target is in the left half
                right = mid - 1;
            }
        }
    }

    // If the target is not found
    return -1;
}


// console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([4, 5, 6, 7, 8, 9, 1, 2, 3], 1)); // 6
// console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 6)); // 6
console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 7)); // 7
// console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1
// console.log(search([4, 5, 6, 7, 0, 1, 2], 1)); // 5
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
// console.log(search([1], 0)); // -1
// console.log(search([1, 3], 1)); // 0
// console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(search([5, 1, 2, 3, 4], 1)); // 1
// console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)); // 4
// console.log(search([4, 5, 6, 7, 8, 9, 1, 2, 3], 9)); // 5
// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 2


// console.log(search([278, 280, 281, 286, 287, 290, 2, 3, 4, 8, 9, 14, 15, 16, 21, 24, 25, 31, 32, 34, 36, 37, 42, 45, 51, 52, 54, 55, 60, 63, 66, 68, 69, 71, 76, 81, 83, 84, 85, 86, 87, 94, 97, 99, 106, 107, 110, 113, 114, 115, 118, 120, 121, 125, 134, 136, 137, 138, 142, 143, 147, 150, 152, 159, 160, 161, 165, 166, 174, 176, 178, 186, 187, 189, 190, 191, 195, 196, 198, 204, 212, 216, 217, 220, 221, 222, 225, 227, 229, 232, 237, 239, 242, 245, 251, 263, 264, 274, 275, 276, 277], 286)); // 3
