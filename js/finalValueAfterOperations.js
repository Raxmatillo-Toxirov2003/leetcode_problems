/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let s1 = 0;
    for (let i = 0; i < operations.length; i++) {
        let text = operations[i];
        if (text.includes("+")) {
            s1++;
        }
        if (text.includes("-")) {
            s1--;
        }
    }
    return s1;
};