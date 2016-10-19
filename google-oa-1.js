var solution = function (num) {
    var str = '' + num,
        arr = str.split('');

    if(arr.length < 2) 
        return num;
    
    var min = Infinity;
    
    for (var i = 0; i < arr.length - 1; i++){
        var index = arr[i] > arr[i + 1] ? i + 1 : i,
            temp = arr[index];
        arr.splice(index, 1);
        
        var num = parseInt(arr.join(''));
        min = Math.min(min, num);
        
        arr.splice(index, 0, temp);
    }
    
    return min;
}

console.log(solution(233614));