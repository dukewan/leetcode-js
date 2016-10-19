/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if (num === 0)
        return ["0:00"];

    var res = [];

    for (var i = 0; i <= num; i++) {
        var hArr = [],
            mArr = [];

        // hour arr
        for (var k = 0; k <= 11; k++) {
            var str = k.toString(2);
            str = str.replace(/0/g, '');
            if (str.length === i)
                hArr.push(k);
        }


        // minute arr
        var j = num - i;
        for (var l = 0; l <= 59; l++) {
            var str2 = l.toString(2);
            str2 = str2.replace(/0/g, '');
            if (str2.length === j)
                mArr.push(l);
        }

        // combine
        for (var m = 1; m <= hArr.length; m++) {
            for (var n = 1; n <= mArr.length; n++) {
                res.push(hArr[m - 1] + ':' + minutes(mArr[n - 1]));
            }
        }
    }

    return res;
};

var minutes = function (minute) {
    if (minute < 10) {
        return '0' + minute;
    }
};


readBinaryWatch(1);