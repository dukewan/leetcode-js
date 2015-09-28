/**
 * @param {number} num
 * @return {number}
 * @desc trival solution including recursion.
 */
var addDigits = function (num) {
    var quotient = num,
		remainder = 0,
        sum = 0;

    while (quotient >= 10) {
        remainder = quotient % 10;
        sum = sum + remainder;
        quotient = parseInt(quotient / 10);
    }

    sum = sum + quotient;

    if (sum >= 10) {
        return addDigits(sum);
    } else {
        return sum;
    }
};
