/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    let j = 0
    for (let i = 0; i <= 2 * nums.length; i++) {
        if (i < nums.length) {
            ans.push(nums[i])
        } else if (i > nums.length && i <= 2 * nums.length) {
            ans.push(nums[j])
            j++;
        }
    }
    return ans;
};
console.log(getConcatenation([1, 2, 1]));