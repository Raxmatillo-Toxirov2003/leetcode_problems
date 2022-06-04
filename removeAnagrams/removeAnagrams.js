var removeAnagrams = function(words) {
    for (let i = 0; i < words.length; i++) {

        const anagrams = [];
        let s1 = 0,
            s2 = 0,
            a = 0;
        anagrams[a] = words[i];
        text1 = words[i];
        text2 = anagrams[a];
        for (let j = 0; j <= text1.length; j++) {
            s1 += text1[j]
            s2 += text2[j]
        }
        if (s2 != s1) {
            anagrams[a] = text1;
            a += 1;
        }
        if (s2 == s1) {
            anagrams[a]
        }

    }
    return words
};
console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]))