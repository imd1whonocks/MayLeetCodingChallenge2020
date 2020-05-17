/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const originalHash = new Map();
    for (let char of p) {
        if (originalHash.has(char)) {
            originalHash.set(char,originalHash.get(char) + 1);
        } else {
            originalHash.set(char, 1);
        }
    }
    let i = 0;
    let j = 0;
    const ans = [];
    let hash = new Map(originalHash);
    while(j < s.length) {
        let char = s[j];
        if (hash.has(char)) {
            const val = hash.get(char);
            if (val == 1) {
                hash.delete(char);
            } else {
                hash.set(char, val - 1);
            }
            if (hash.size == 0) {
                ans.push(i);
                i++;
                j=i
                hash = new Map(originalHash);
            } else {
                j++
            }
        } else if (originalHash.has(char)) {
            i++;
            j = i;
            hash = new Map(originalHash);    
        } else {
            i = j + 1;
            j = i;
            hash = new Map(originalHash); 
        }
    }
    return ans
};
// huge scope for improvement