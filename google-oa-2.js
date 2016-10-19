// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var paths = S.split('\n'),
        stack = Array(paths.length + 1).fill(0);
    
    stack[0] = 1;
    var max = 0,
        flag = false;
    
    for (var i = 0; i < paths.length; i++) {
        var s = paths[i],
            lev = s.lastIndexOf("\t") + 1;
            
        stack[lev + 1] = stack[lev] + s.length - lev + 1;
        var curLen = stack[lev];
        if (s.indexOf('.jpeg') != -1 || s.indexOf('.gif') != -1 || s.indexOf('.png') != -1) {
            max = Math.max(max, curLen - 1);
            flag = true;
        }
    }
    
    if (flag && max === 0)
        return 1;
    
    return max;
}

console.log(solution("dir1\n\tdir11\t\n\tdir12\n\t\tpicture.jpeg\n\t\tdir121\n\t\tfile1.txt\ndir2\n\tfile2.gif"));console.log(solution("file2.gif"));


