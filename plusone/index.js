/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const sum = parseInt(digits.join('')) + 1;
    var result = Array.from(String(sum), Number);
    return result
};