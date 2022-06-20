/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            sum1 = array[i][j];
        }
    }
    return sum1;
};
console.log(maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5]
]));