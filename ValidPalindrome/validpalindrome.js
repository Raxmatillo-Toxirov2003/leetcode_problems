var isPalindrome = function(s) {
    var boolean = true

    text = s.replace(/;/g, "")
    text1 = text2.replace(/:/g, "")
    text3 = text2.replace(/,/g, "")
    text4 = text3.replace(/./g, "")
    text5 = text4.replace(/'/g, "")
    text6 = text5.replace(/`/g, "")
    text7 = text6.replace(/"/g, "")
    for (let i = 0; i <= text.length; i++) {
        if (text7[i] == text7[text.length - i]) {

            return boolean
        } else
            return boolean
    }
    console.log(isPalindrome("A man, a plan, a canal: Panama"))
};