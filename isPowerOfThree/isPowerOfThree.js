/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n == 1)
        return true;
    if (n == 0)
        return false;
    if (n % 3 == 0) {
        n = n / 3;
        return isPowerOfThree(n);
    }
    if (n % 3 != 0) {
        return false;
    }
};