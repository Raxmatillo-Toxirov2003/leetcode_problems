/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let sorted = nums.sort((a, b) => a - b),
        len = nums.length;
    let res1 = sorted[0] * sorted[1] * sorted[len - 1],
        res2 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3]
    return Math.max(res1, res2);
};