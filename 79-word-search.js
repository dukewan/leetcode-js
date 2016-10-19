/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word.length < 1)
        return true;

    if (board.length < 1 || (board[0] && board[0].length < 1))
        return false;

    var substr = word.substring(1);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == word[0]) {
                var temp = [].concat(board);
                temp[i][j] = '#';
                if (existPath(i, j, temp, substr))
                    return true;
            }
        }
    }

    return false;
};

var existPath = function (i, j, board, word) {
    if (word.length < 1)
        return true;

    var result = false,
        temp,
        substr = word.substring(1);

    if (valid(i - 1, j, board, word[0])) {
        temp = [].concat(board);
        temp[i - 1][j] = '#';
        result = result || existPath(i - 1, j, temp, substr);
    }

    if (valid(i + 1, j, board, word[0])) {
        temp = [].concat(board);
        temp[i + 1][j] = '#';
        result = result || existPath(i + 1, j, temp, substr);
    }

    if (valid(i, j - 1, board, word[0])) {
        temp = [].concat(board);
        temp[i][j - 1] = '#';
        result = result || existPath(i, j - 1, temp, substr);
    }

    if (valid(i, j + 1, board, word[0])) {
        temp = [].concat(board);
        temp[i][j + 1] = '#';
        result = result || existPath(i, j + 1, temp, substr);
    }

    return result;
};

var valid = function (i, j, board, letter) {
    return (i >= 0 && j >= 0 && i < board.length && j < board[0].length && board[i][j] == letter);
};


exist([['C','A','A'], ['A', 'A', 'A'], ['B', 'C', 'D']], "AAB");