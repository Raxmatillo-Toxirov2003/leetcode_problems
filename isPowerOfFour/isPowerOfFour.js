/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n == 1)
        return true;
    if (n == 0)
        return false;
    if (n % 4 == 0) {
        n = n / 4;
        return isPowerOfFour(n);
    }
    if (n % 4 != 0) {
        return false;
    }
};