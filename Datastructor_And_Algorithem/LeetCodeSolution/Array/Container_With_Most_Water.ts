// function maxArea(height: number[]): number {

//     let maxAreaValue = 0;

//     let lastIndex = height.length - 1;
//     let maxWidth = height.length - 1;
//     let i = 0;

//     while (i < lastIndex) {

//         if (height[i] <= height[lastIndex]) {
//             maxAreaValue = Math.max(maxAreaValue, height[i] * maxWidth);
//             i++;
//         } else if (height[i] >= height[lastIndex]) {
//             maxAreaValue = Math.max(maxAreaValue, height[lastIndex] * maxWidth);
//             lastIndex--;
//         }

//         maxWidth--;

//     }


//     return maxAreaValue;
// };

function maxArea(height: number[]): number {
    let maxWater = 0;

    let left = 0
    let right = height.length - 1
    
    while(left < right){
        let water = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, water);
        
        height[left] < height[right] ? left++ : right--;
    }

    return maxWater
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
