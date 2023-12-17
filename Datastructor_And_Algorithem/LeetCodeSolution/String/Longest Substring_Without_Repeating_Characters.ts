// function lengthOfLongestSubstring(s: string): number {
//     const obj = new Map();
//     let maxval = 0;
//     for (let i = 0; i < s.length; i++) {

//         if (s[i - 1] === s[i]) {
//             maxval = Math.max(maxval, obj.size);
//             let index = i - 1
//             while (index > -1 && index === obj.get(s[index])) {
//                 obj.delete(s[index]);
//                 index--;
//             }
//         }

//         if (obj.has(s[i])) {
//             let index = obj.get(s[i]);
//             maxval = Math.max(maxval, obj.size);
//             while (index > -1 && index === obj.get(s[index])) {
//                 obj.delete(s[index]);
//                 index--;
//             }
//         }


//         obj.set(s[i], i);
//     }

//     return Math.max(maxval, obj.size);;
// };

// function lengthOfLongestSubstring(s: string): number {
//     const obj: {
//         [key: string]: number
//     } = {};
//     let maxval = 0;

//     for (let i = 0; i < s.length; i++) {

//         if (s[i - 1] === s[i]) {
//             maxval = Math.max(maxval, Object.keys(obj).length);
//             let index = i - 1

//             while (index > -1 && index === obj[s[index]]) {
//                 delete obj[s[index]];
//                 index--;
//             }
//         }

//         if (obj.hasOwnProperty(s[i])) {
//             let index = obj[s[i]];
//             maxval = Math.max(maxval, Object.keys(obj).length);
//             while (index > -1 && index === obj[s[index]]) {
//                 delete obj[s[index]];
//                 index--;
//             }
//         }


//         obj[s[i]] = i
//     }

//     return Math.max(maxval, Object.keys(obj).length);
// };

function lengthOfLongestSubstring(s: string): number {
    let value: Set<string> = new Set();
    let l: number = 0;
    let maxLength: number = 0;

    for (let i = 0; i < s.length; i++) {
        while (value.has(s[i])) {
            value.delete(s[l]);
            l++;
        }
        value.add(s[i]);
        maxLength = Math.max(maxLength, value.size);
    }

    return maxLength;
};


console.log(lengthOfLongestSubstring("bpfbhmipx")) // 7
// console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("abcabcbb")) // 3  "abc"
// console.log(lengthOfLongestSubstring("bbbbb")) // 1   "b"
// console.log(lengthOfLongestSubstring("pwwkew")) // 3  "wke"
// console.log(lengthOfLongestSubstring(" ")) // 1
// console.log(lengthOfLongestSubstring("aab")) // 2
// console.log(lengthOfLongestSubstring("dvdf")) // 3
// console.log(lengthOfLongestSubstring("")) // 0
// console.log(lengthOfLongestSubstring("cdd")) // 2
// console.log(lengthOfLongestSubstring("  ")) // 1
// console.log(lengthOfLongestSubstring("jlygy")) // 4
// console.log(lengthOfLongestSubstring("aab")) // 2
// console.log(lengthOfLongestSubstring("abba")) // 2
// console.log(lengthOfLongestSubstring("wobgrovw")) // 6