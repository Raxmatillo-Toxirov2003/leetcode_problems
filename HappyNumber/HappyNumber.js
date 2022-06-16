/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n <= 0) return false;
    let nextNum = n;
    let recordOfNum = [];

    while (!recordOfNum.includes(nextNum)) {
        recordOfNum.push(nextNum);
        let numArr = nextNum.toString().split("");
        nextNum = 0;
        for (let num of numArr) {
            nextNum += Number(num) * Number(num);
        }
        if (nextNum === 1) return true;
    }
    return false;
};