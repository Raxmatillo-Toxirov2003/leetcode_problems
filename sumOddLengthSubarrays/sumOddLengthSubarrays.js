/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.ceil((i + 1) * (arr.length - i) / 2) * arr[i];
    }
    return sum;
};