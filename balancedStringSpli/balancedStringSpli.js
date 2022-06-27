/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0;
    let r = 0;
    let l = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") r++;
        if (s[i] === "L") l++;
        if (r === l) res++;
    }
    return res;
};