/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxValue = Math.max.apply(Math, candies);
    for (let i = 0; i < candies.length; i++) {
        candies[i] = (candies[i] + extraCandies) >= maxValue ? true : false;
    }
    return candies;
};