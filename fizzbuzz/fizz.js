// /**
//  * @param {number} n
//  * @return {string[]}
//  */

var fizzBuzz = function(n) {
    let text = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) text.push("FizzBuzz")
        else if (i % 3 === 0 && i % 5 !== 0) text.push("Fizz")
        else if (i % 5 === 0 && i % 3 !== 0) text.push("Buzz")
        else if (i % 3 !== 0 && i % 5 !== 0) text.push("" + i)
    }
    return text
};
console.log(fizzBuzz(15))