/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (65 <= code && code <= 90) {
            output += String.fromCharCode(code + 32);
        } else {
            output += s[i];
        }
        s.toLowerCase
    }
    return output;
};