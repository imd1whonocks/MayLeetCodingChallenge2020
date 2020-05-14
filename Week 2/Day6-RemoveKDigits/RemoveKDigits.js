/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    for (let i = 0; i < k; i++) {
        let j = 0;
        while (j < num.length - 1 && num.charAt(j) <= num.charAt(j + 1)) {
            j++;
        }
        num = deleteString(num,j);
    }
     while (num.length > 1 && num.charAt(0) == '0')
        num = deleteString(num,0);

     if (num.length == 0) {
        return '0';
     }
     return num;
};
const deleteString = (str,i) => {
    const arr = str.split('');
    arr.splice(i,1);
    return arr.join('');
}