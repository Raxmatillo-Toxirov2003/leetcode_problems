/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 1)
        return n;
    if (n <= 3)
        return n - 1;
    if (n == 4)
        return n;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};