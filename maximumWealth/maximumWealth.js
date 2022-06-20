/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (sum1 > sum2) {
            sum2 = sum1;
            sum1 = 0;
        }
        for (let j = 0; j < accounts[i].length; j++) {
            sum1 = sum1 + accounts[i][j];
        }

    }
    return (sum2 > sum1) ? sum2 : sum1;
};
console.log(maximumWealth([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 0, 0],
]));