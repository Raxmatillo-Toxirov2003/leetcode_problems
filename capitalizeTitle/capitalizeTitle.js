/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let c = title.split(" ")
    c = c.map((x) => x.toLowerCase())
    c = c.map((x) => x.length > 2 ? (x[0].toUpperCase() + x.slice(1)) : x.toLowerCase())
    return c.join(" ")

};