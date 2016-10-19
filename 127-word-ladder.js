var ladderLength = function(beginWord, endWord, wordList) {
    wordList.add(endWord);
    var queue = [];
    queue[0] = [beginWord, 1];

    while (queue.length > 0) {
        /**
         * should be shift instead of pop for a queue, otherwise the
         * output is wrong. because we should let the lower len level
         * transform to find it's neighbor first!
         */
        var data = queue.shift();
        var begin = data[0],
            len = data[1];

        if (begin == endWord)
            return len;

        var neighbors = findNeighbors(begin, wordList);
        neighbors.forEach(function (key, value, set) {
            queue.push([value, len + 1]);
        });
    }
    return 0;
};

var findNeighbors = function (begin, dic) {
    var arr = begin.split('');
    var temp,
        neighbors = new Set();
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        for (var j = 1; j <= 26; j++) {
            arr[i] = String.fromCharCode(96 + j);
            if (temp == arr[i]) continue;

            var newBegin = arr.join('');
            if (dic.has(newBegin)) {
                dic.delete(newBegin);
                neighbors.add(newBegin);
            }
        }

        arr[i] = temp;
    }

    return neighbors;
};

/*
// test case 1: normal
var arr = ["hot","dot","dog","lot","log"];
var set = new Set(arr);

console.log(ladderLength('hit', 'cog', set));
*/

/*
// test case 2: can't find neighbors
var arr = ["hot", "dog"]
var set = new Set(arr);

console.log(ladderLength('hot', 'dog', set));
*/

/*
// test case 3: found my code error with ascii
var arr = ["ted","tex","red","tax","tad","den","rex","pee"]
var set = new Set(arr);

console.log(ladderLength('red', 'tax', set));
*/

// test case 4: found my code error that using pop for a queue
var arr = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
var set = new Set(arr);

console.log(ladderLength('qa', 'sq', set));
