/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address = address.split(".")
    address = address.join("[.]")
    return address
};