var percentageLetter = function(s, letter) {
    let natija, soni = 0,
        uzunlik = s.length;
    for (let i = 0; i <= uzunlik; i++) {
        if (s[i] == letter)
            soni += 1;
        if (s[i] !== letter)
            natija = (soni / uzunlik) * 100;
    }
    return parseInt(natija)
};
console.log(percentageLetter("adsafg", "a"))