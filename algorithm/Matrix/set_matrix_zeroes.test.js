let matrix = require('./set_matrix_zeroes');
let zeros = matrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);

test('좌우상하는 0이 됨', () => {
    expect(zeros).toStrictEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});
