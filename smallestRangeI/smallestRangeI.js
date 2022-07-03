/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {

    let min = nums[0];
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }


    return (min + k >= max - k) ? 0 : (max - k) - (min + k);
};