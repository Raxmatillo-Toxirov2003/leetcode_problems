/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let flag = false;
    let ast = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '|')
            flag = !flag;
        else if (!flag && s[i] == '*')
            ast++;
    }
    return ast;
};