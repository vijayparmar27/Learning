function lengthOfLongestSubstring(s: string): number {
    const obj = new Map();
    obj.set(s[0], 0)
    let maxval = 0;
    let count = 1;
    for (let i = 1; i < s.length; i++) {

        if(s[i - 1] === s[i]) {
            maxval = Math.max(maxval, count);
            count = 1;
            continue;
        }

        if (obj.has(s[i])) {

            count = count - obj.get(s[i]);
            maxval = Math.max(maxval, count);
            obj.delete(s[i]);

            // console.log(`------- count :: `, count)
        }

        // if(){

        // }
        count++;

        obj.set(s[i], i);
    }
    return Math.max(maxval, count);;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3  "abc"
console.log(lengthOfLongestSubstring("bbbbb")) // 1   "b"
console.log(lengthOfLongestSubstring("pwwkew")) // 3  "wke"
console.log(lengthOfLongestSubstring(" ")) // 1  
console.log(lengthOfLongestSubstring("aab")) // 2  
console.log(lengthOfLongestSubstring("dvdf")) // 3  
console.log(lengthOfLongestSubstring("")) // 0  
console.log(lengthOfLongestSubstring("cdd")) // 2
console.log(lengthOfLongestSubstring("  ")) // 1