/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let final = new Set();
    let arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let str;
    for (let val of words) {
        str = "";
        for (let i = 0; i < val.length; i++) {
            let num = val.charCodeAt(i) - 97;
            str += arr[num];
        }
        final.add(str);
    }
    return final.size;
};