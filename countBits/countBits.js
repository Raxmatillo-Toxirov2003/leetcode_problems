/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [0];

    for (let i = 1; i <= num; i++) {
        const odd = i & 1;
        const half = i >> 1;
        res.push(res[half] + odd);
    }

    return res;
};