/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let ar = [];
    let i = 0;
    let j = s.length;
    for (let key = 0; key < s.length + 1; key++) {
        if (s[key] === "I") {
            ar.push(i);
            i++;
        } else {
            ar.push(j);
            j--;
        }
    }
    return ar;
};