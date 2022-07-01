/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1,
        sum = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        product *= lastDigit;
        sum += lastDigit;
        n = Math.floor(n / 10);
    }
    return product - sum;
};