/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return [];
    const array2D = [];

    for (let row = 1; row <= m; row++) {
        const group = original.splice(0, n);

        array2D.push(group);
    }

    return array2D;
};