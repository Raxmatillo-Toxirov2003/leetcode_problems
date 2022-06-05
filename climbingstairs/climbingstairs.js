/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1,
        b = 2,
        next;
    for (let i = 3; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return n === 1 ? a : b;

};