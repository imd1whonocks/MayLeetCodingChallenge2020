/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(N, trust) {
//     if (trust.length == 0 && N == 1) {
//         return 1
//     }
//     let maxOcur = [-1,-1 ];
//     const hash = new Map();
//     for (let i = 0; i < trust.length; i++) {
//         const temp = trust[i];
//         if (hash.has(temp[1])) {
//              hash.set(temp[1], hash.get(temp[1]) + 1);
//         } else {
//              hash.set(temp[1], 1);
//         }
//     }
//     USE MAX-HEAP TO AVOID THIS
//     hash.forEach((value,key) => {
//         if (value > maxOcur[1]) {
//             maxOcur= [key,value]
//         }
//     })
//     if (maxOcur[1] != N - 1) {
//         return -1
//     }
//      for (let i = 0; i < trust.length; i++) {
//         if (trust[i][0] == maxOcur[0]) {
//             return -1
//         }
//      }
//     return maxOcur[0];
// };
var findJudge = function(N, trust) {
    const arr = new Array(N + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        arr[trust[i][0]]--;
        arr[trust[i][1]]++;
    }
    for (let i = 1 ; i < N + 1;i++ ) {
        if (arr[i] == N-1) {
            return i;
        }
    }
    return -1;
}