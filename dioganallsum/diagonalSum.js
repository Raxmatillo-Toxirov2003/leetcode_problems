/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let index = 0

    while (index < mat.length) {
        if (index === mat.length - 1 - index)
            sum += mat[index][index]
        else
            sum += mat[index][index] + mat[index][mat.length - 1 - index]
        index++
    }

    return sum

};