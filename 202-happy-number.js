/**
 * @param {number} n
 * @return {boolean}
 */

var t = [];
var isHappy = function(n) {
    if (n == 1) {
        return true;
    }

    if (t[n] !== undefined) {
        return false;
    }

    t[n] = 1;
    var sum = 0;

    while (parseInt(n / 10) !== 0) {
        sum += Math.pow(n % 10, 2);
        n = parseInt(n / 10);
    }

    sum += Math.pow(n, 2);

    if (sum == 1) {
        return true;
    } else {
        return isHappy(sum);
    }
};

isHappy(10);
