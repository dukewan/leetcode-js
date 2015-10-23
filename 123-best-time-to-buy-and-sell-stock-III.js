/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var length = prices.length;

    if (length === 0 || length == 1) {
        return 0;
    }

    // get the left side max profit (1 ... i)
    var min = prices[0],
        optLeft = [];

    optLeft[0] = 0;
    for (var i = 1; i <= length - 1; i++) {
        min = Math.min(min, prices[i]);
        optLeft[i] = Math.max(optLeft[i - 1], prices[i] - min);
    }

    // get the right side max profit (i ... n)
    var max = prices[length - 1],
        optRight = [];

    optRight[length - 1] = 0;
    for (var j = length - 2; j >= 0; j--) {
        max = Math.max(max, prices[j]);
        optRight[j] = Math.max(optRight[j + 1], max - prices[j]);
    }

    // get the max of optLeft(1 ... i) + optRight(i ... n)
    var optTotal = 0;
    for (var k = 0; k <= length - 1; k++) {
        optTotal = Math.max(optTotal, optLeft[k] + optRight[k]);
    }

    return optTotal;
};
