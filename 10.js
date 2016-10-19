/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var str = s.split(''),
        reg = p.split('');

    while(reg.length > 0) {
        // get current pattern
        var current = '';
        current = reg.shift();
        var letter = current;
        if (reg.length > 0 && reg[0] == '*')
            current += reg.shift();

        // deqeue str according to current pattern
        if (str.length > 0) {
            if (current.length > 1) {
                if (str[0] === letter || letter == '.') {
                    letter = str[0];
                    str.shift();

                    while (str.length > 0 && str[0] == letter)
                        str.shift();
                }
            } else {
                if (str[0] === letter || letter == '.') {
                    letter = str[0];
                    str.shift();
                } else {
                    return false;
                }
            }
        } else {
            if (current.length < 2)
                return false;
        }
    }

    if (str.length > 0)
        return false;
    else
        return true;
};

isMatch("aab", "c*a*b*");