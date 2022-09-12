var setZeroes = function (matrix) {
    const zeroes = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push([i, j]);
            }
        }
    }

    for (const point of zeroes) {
        const r = point[0];
        const c = point[1];
        for (let i = 0; i < matrix[r].length; i++) {
            matrix[r][i] = 0;
        }
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][c] = 0;
        }
    }

    return matrix;
};

module.exports = setZeroes;