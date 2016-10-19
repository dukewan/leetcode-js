var addBinary = function(a, b) {
    var aArr = a.split('').reverse(),
        bArr = b.split('').reverse();

    var len = (a.length > b.length) ? a.length : b.length,
        inc = 0,
        sumArr = [];

    for (var i = 0; i < len; i++) {
        var num1 = parseInt(aArr[i]) ? parseInt(aArr[i]) : 0,
            num2 = parseInt(bArr[i]) ? parseInt(bArr[i]) : 0;

        var sum = num1 + num2 + inc;
        sumArr.push(sum % 2);
        inc = Math.floor(sum / 2);
    }

    if (inc == 1)
        sumArr.push(1);

    return sumArr.reverse().join('');
};

console.log(addBinary('1011', '111'));