function minWindow(s: string, t: string): string {

    const targetValue = new Set(...t);
    let smallStr = "";
    let targetCount = 0;
    for (let i = 0; i < s.length; i++) {

        if (targetValue.has[s[i]]) {

            if(smallStr.includes(s[i])){

            }
            smallStr = smallStr + s[i];
            targetCount++;
        }

    }

    return ""
};


// console.log(minWindow("ADOBECODEBANC", "ABC")) //BANC
// console.log(minWindow("a", "a")) // "a"
// console.log(minWindow("a", "aa")) // ""