let number = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) { return true }
    }
    return false;
};
console.log(containsDuplicate(number))