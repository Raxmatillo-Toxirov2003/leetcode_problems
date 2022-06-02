/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var a1 = 0,
        a2 = 0,
        sum = [];
    for (let i = 0; i < nums.length; i++) {
        a1 = nums[i];
        a2 = a2 + a1;
        sum[i] = a2;
    }
    return sum
};