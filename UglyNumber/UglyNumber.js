/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 0) return false
    for (let sum of[2, 3, 5]) {
        let i = 1
        while (n % sum ** i === 0) ++i
        n /= sum ** (i - 1)
    }
    return n === 1
};