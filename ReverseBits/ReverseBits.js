/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0;
    var i = 31;
    while (i > 0) {
        res = res << 1;
        if (n & 1) {
            res = res | 1;
        }
        n = n >> 1;
        i -= 1;
    }
    if (n & 1) {
        return res * 2 + 1;
    } else {
        return res * 2;
    }
};