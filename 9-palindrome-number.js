/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0)
        return false;

    var rX = 0,
        temp = x;

    while (temp !== 0) {
        rX = temp % 10 + rX * 10;
        temp = Math.floor(temp / 10);
    }

    return rX == x;
};

isPalindrome(1);

