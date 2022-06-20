/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let uni = new Set([...nums]),
        res = []
    for (let n of uni) {
        res.push(nums.filter(m => m == n))
    }
    return res.sort((a, b) => {
        if (a.length == b.length) {
            if (a[0] < b[0]) {
                return 1
            } else {
                return -1
            }
        } else {
            return a.length - b.length
        }


    }).flat()
};