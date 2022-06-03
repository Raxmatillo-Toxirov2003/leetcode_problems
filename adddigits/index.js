/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        let lastnumber = num % 10;

        num = parseInt(num / 10);

        num = num + lastnumber;
    }
    return num;
};
console.log(addDigits(38))