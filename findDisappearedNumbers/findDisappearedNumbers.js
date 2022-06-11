/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numbers = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            numbers.push(i);
        }
    }
    return numbers;
};