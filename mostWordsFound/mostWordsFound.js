/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for (let sentence of sentences) {
        let words = sentence.split(' ');
        max = Math.max(max, words.length)
    }
    return max;
};