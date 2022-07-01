/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let sortedArray = nums.sort((a, b) => b - a)
    for (let i = 0; i < sortedArray.length - 2; i++) {
        let a = sortedArray[i]
        let b = sortedArray[i + 1]
        let c = sortedArray[i + 2]
        if (a < c + b) {
            return a + b + c
        }
    }
    return 0
};