/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const res = [];

    for (let num of nums) {
        num = Math.abs(num);

        if (nums[num - 1] < 0) res.push(num);
        else nums[num - 1] = -nums[num - 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i + 1);
        if (res.length === 2) return res;
    }
};