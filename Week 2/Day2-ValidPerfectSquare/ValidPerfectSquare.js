/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 0) {
        return false;
    }
    let i = 1;
    while (i*i < num) i++;
    return i*i == num;
};