/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    nums = nums.sort(function(a, b) { return a - b })
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] != nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1
};