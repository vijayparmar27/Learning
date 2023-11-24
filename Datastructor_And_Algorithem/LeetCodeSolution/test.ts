// function productExceptSelf(nums: number[]): number[] {
//     const result = Array(nums.length).fill(1);
    
//     let x = 1;
//     let y = 1;
  
//     for (let i = 0; i < result.length; i++) {
//       result[i] *= x;
//       result[result.length - 1 - i] *= y;
  
//       x *= nums[i];
//       y *= nums[nums.length - 1 - i];
//     }
  
//     return result;
//   };