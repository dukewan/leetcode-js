var solution = function (X) {
    // write your code in JavaScript (Node.js 6.4.0)
    var str = '' + X,
        arr = str.split('');
        
    if (arr.length < 2)
        return num;
        
    var max = -Infinity;
    
    for (var i = 0; i < arr.length - 1; i++) {
        var temp1 = arr[i],
            temp2 = arr[i + 1],
            avg = Math.round((parseInt(arr[i]) + parseInt(arr[i + 1])) / 2);
        arr.splice(i, 2, avg);
        
        var num = parseInt(arr.join(''));
        max = Math.max(max, num);
        
        arr[i] = temp1;
        arr.splice(i + 1, 0, temp2);
    }
    
    return max;
}

console.log(solution(623315));