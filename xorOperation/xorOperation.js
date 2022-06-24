/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let xor_arr

    for (let i = 0; i < n; i++) {
        xor_arr = xor_arr ^ start + 2 * i
    }

    return xor_arr
};