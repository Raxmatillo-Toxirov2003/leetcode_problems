/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n % 2 == 0) {
        n = n / 2;
        return isPowerOfTwo(n);
    }
    if (n == 1)
        return true;
    if (n % 2 != 0) {
        return false;
    }
};
console.log(isPowerOfTwo(22));