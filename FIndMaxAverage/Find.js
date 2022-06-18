/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let avg = -Infinity;
    let start = 0;
    let wSum = 0;

    for (let end = 0; end < nums.length; end++) {
        wSum = wSum + nums[end];

        if ((end - start) + 1 === k) {
            avg = Math.max(avg, wSum / k);
            wSum = wSum - nums[start];
            start = start + 1;
        }
    }

    return avg;
};