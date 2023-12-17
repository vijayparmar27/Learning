function characterReplacement(s: string, k: number): number {
    if (!s.length) {
        return 0;
    }

    let max_length = 0;
    let max_count = 0;
    let start = 0;
    const char_count: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        char_count[char] = (char_count[char] || 0) + 1;
        max_count = Math.max(max_count, char_count[char]);

        // console.log(`-------------------------------------`)
        // console.log(`----- char_count :: `, char_count)
        // console.log(`----- max_count :: `, max_count)
        // console.log(`----- start :: `, start)
        // console.log(`----- end :: `, end)
        
        // console.log(`----- end - start + 1 - max_count  :: `, end - start + 1 - max_count)
        // console.log(`----- end - start + 1 - max_count > k :: `, end - start + 1 - max_count > k)

        while (end - start + 1 - max_count > k) {
            char_count[s[start]] -= 1;
            start += 1;
        }

        // console.log(`----- start :: 1 ::`, start)
        // console.log(`----- end :: 1 ::`, end)

        // Update the maximum length of the substring.
        max_length = Math.max(max_length, end - start + 1);
        // console.log(`----- max_length :: 1 ::`, max_length)

    }

    return max_length;
}
// console.log(characterReplacement(s2, k2)); // Output: 4


console.log(characterReplacement("AABABBA", 1))
// console.log(characterReplacement("ABAB", 2))
// console.log(characterReplacement("ABCAABCDA", 2))