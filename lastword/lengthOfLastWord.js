var lengthOfLastWord = function(s) {
    let text = s.trim();
    let length = text.lastIndexOf(" ");
    let word = text.slice(length);
    let thenumber = word.length;
    if (length == "-1")
        return text.length
    else
        return (thenumber - 1)
};
console.log(lengthOfLastWord("d"))