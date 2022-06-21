/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0
    let len = S.length

    for (let i = 0; i < len; i++) {
        if (J.indexOf(S[i]) >= 0) {
            count++
        }
    }
    return count
};