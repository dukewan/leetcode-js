/**
 * @param {number[]} prices
 * @return {number}
 * Brute force version with complextity of O(n^2).
 * NOTICE!: Will exceed time limt.
 */
var maxProfit = function(prices) {
    var length = prices.length,
        opt = [],
        optBuyAtI = [];
        optTotal = 0;

    if (length === 0 || length == 1) {
        return 0;
    }

    for (var i = 1; i <= length - 1; i++) {
        opt[i] = [];
        opt[i][i] = Math.max(prices[i] - prices[i - 1], 0);
        optBuyAtI[i] = opt[i][i];
        for (var j = i + 1; j <= length - 1; j++) {
            opt[i][j] = Math.max(opt[i][j - 1], prices[j] - prices[i]);
            optBuyAtI[i] = Math.max(opt[i][j], optBuyAtI[i]);
        }
        optTotal = Math.max(optBuyAtI[i], optTotal);
    }

    return optTotal;
};

/**
 * @param {number[]} prices
 * @return {number}
 * More like greedy. Reserve the partial optimal and replace it when
 * a better result is found.
 * With complextity of O(n)
 */
var maxProfit = function (prices) {
    var length = prices.length,
        min = Infinity,
        res = -Infinity;

    for (var i = 0; i <= length - 1; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] > min && prices[i] - min > res) {
            res = prices[i] - min;
        }
    }

    if (isFinite(res)) {
        return res;
    } else {
        return 0;
    }
};
