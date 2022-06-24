/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let binary = n.toString(2);
    binary = binary.split("").map(x => {
        return (x == 1) ? 0 : 1;
    }).join("");
    return parseInt(binary, 2);
};