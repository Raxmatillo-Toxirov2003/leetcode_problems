/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {

        if (target - nums[i] in obj) {
            return [obj[target - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
};