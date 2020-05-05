/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = new Map();
    let ans = Number.POSITIVE_INFINITY;
    for (let i = 0 ; i < s.length ; i++) {
        const char = s.charCodeAt(i);
        if (hash.has(char)) {
            hash.set(char, -1);
        } else {
            hash.set(char, i);
        }
    }
//     [...s].map((char,index) => { 
//    DONT USE MAP. 6% to 72%
//     });
    hash.forEach( (value, key) => {
      if (value != -1) {
          ans = Math.min(ans, value)
      }
    });
    return ans == Number.POSITIVE_INFINITY ? -1 : ans
    
};