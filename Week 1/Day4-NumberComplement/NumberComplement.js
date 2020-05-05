/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2).split('');
    bin = bin.map(el => el == 0 ? 1 : 0)
    return parseInt(bin.join('').toString(), 2);
};