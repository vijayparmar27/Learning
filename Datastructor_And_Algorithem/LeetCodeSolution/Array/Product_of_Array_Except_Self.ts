// function productExceptSelf(nums: number[]): number[] {
//     const productExceptSelfArray: number[] = [];
//     let index: number = 0;
//     let i: number = 0;
//     while (index < nums.length) {
//         if (i === nums.length) {
//             i = 0;
//             index++;
//         } else {if (index !== i) {
//             productExceptSelfArray[index] = productExceptSelfArray[index] || productExceptSelfArray[index] === 0 ? productExceptSelfArray[index] * nums[i] : nums[i];
//             i++;
//         }else{
//             i++;
//         }
//     }
//     }
//     return productExceptSelfArray;
// };

// function productExceptSelf(nums: number[]): number[] {

//     const productExceptSelfArray: number[] = [1];
//     const productExceptSelfArray1: number[] = [];
//     const productExceptSelfArray2: number[] = [];

//     for (let i = 1; i < nums.length; i++) {
//         productExceptSelfArray.push(productExceptSelfArray[i - 1] * nums[i - 1]);
//     }

//     for (let i = nums.length - 1; i >= 0; i--) {

//         productExceptSelfArray1[i] = i === nums.length - 1 ?
//             1 : nums[i + 1] * productExceptSelfArray1[i + 1];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         productExceptSelfArray2[i] = productExceptSelfArray[i] * productExceptSelfArray1[i]
//     }

//     return productExceptSelfArray2;
// };

// function productExceptSelf(nums: number[]): number[] {

//     const productExceptSelfArray: number[] = [1];
//     const productExceptSelfArray1: number[] = [];
//     const productExceptSelfArray2: number[] = [];

//     productExceptSelfArray1[nums.length - 1] = 1

//     for (let i = 1; i < nums.length; i++) {
//         productExceptSelfArray.push(productExceptSelfArray[i - 1] * nums[i - 1]);
//         productExceptSelfArray1[nums.length - i - 1] = nums[nums.length - i] * productExceptSelfArray1[nums.length - i]
//     }

//     for (let i = 0; i < nums.length; i++) {
//         productExceptSelfArray2[i] = productExceptSelfArray[i] * productExceptSelfArray1[i]
//     }

//     return productExceptSelfArray2;
// };

// function productExceptSelf(nums: number[]): number[] {

//     const productExceptSelfArray: number[] = [1];
//     const productExceptSelfArray1: number[] = [];
//     const productExceptSelfArray2: number[] = [];

//     productExceptSelfArray1[nums.length - 1] = 1

//     for (let i = 1; i < nums.length; i++) {
//         productExceptSelfArray.push(productExceptSelfArray[i - 1] * nums[i - 1]);
//         productExceptSelfArray1[nums.length - i - 1] = nums[nums.length - i] * productExceptSelfArray1[nums.length - i];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         productExceptSelfArray2[i] = productExceptSelfArray[i] * productExceptSelfArray1[i]
//     }

//     return productExceptSelfArray2;
// };

// function productExceptSelf(nums: number[]): number[] {
//   const productExceptSelfArray: number[] = [1];
//   const productExceptSelfArray1: number[] = [];
//   const productExceptSelfArray2: number[] = [];

//   productExceptSelfArray1[nums.length - 1] = 1;

//   productExceptSelfArray2.push(1);
//   productExceptSelfArray2[nums.length - 1] = 1;

//   for (let i = 1; i < nums.length; i++) {

//     let x = productExceptSelfArray[i - 1] * nums[i - 1];
//     let y = nums[nums.length - i] * productExceptSelfArray1[nums.length - i];

//     productExceptSelfArray.push(x)
//     productExceptSelfArray1[nums.length - i - 1] = y;

//     productExceptSelfArray2[i] =
//       productExceptSelfArray2[i] || productExceptSelfArray2[i] == 0
//         ? productExceptSelfArray2[i] * x
//         : x;

//     productExceptSelfArray2[nums.length - i - 1] =
//       productExceptSelfArray2[nums.length - i - 1] ||
//       productExceptSelfArray2[nums.length - i - 1] == 0
//         ? productExceptSelfArray2[nums.length - i - 1] * y
//         : y;

//   }

//   return productExceptSelfArray2;
// }

// function productExceptSelf(nums: number[]): number[] {
//   const result = Array(nums.length).fill(1);

//   let x = 1;
//   let y = 1;

//   for (let i = 0; i < result.length; i++) {
//     result[i] *= x;
//     result[result.length - 1 - i] *= y;

//     x *= nums[i];
//     y *= nums[nums.length - 1 - i];
//   }

//   return result;
// }

function productExceptSelf(nums: number[]): number[] {
  let products = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    products[i] *= products[i - 1] * nums[i - 1];
  }

  let postFix = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    postFix *= nums[i + 1];
    products[i] *= postFix;
  }

  return products;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([-2, 4, 0, 2]))
