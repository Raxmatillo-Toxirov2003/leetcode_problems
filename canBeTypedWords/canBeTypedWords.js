/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let res = 0;
    let boo = 0;
    text = text.split(" ");
    for (let john in text) {
        for (let key in brokenLetters) {
            if (text[john].includes(brokenLetters[key]) && boo === 0) {
                res++;
                boo++;
            }
        }
        boo = 0;
    }
    return text.length - res;
};