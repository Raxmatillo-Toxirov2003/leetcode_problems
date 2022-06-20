/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let array = [];
    let j = n;
    for (let i = 0; i < n; i++, j++) {
        array.push(nums[i]);
        array.push(nums[j]);
    }
    return array;
};