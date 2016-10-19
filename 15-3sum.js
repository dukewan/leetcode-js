/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3)
        return [];

    nums.sort(function (a, b) { return a - b; });
    var result = [],
        hash = new Set(),
        len = nums.length;

    for (var i = 0; i < len; i++) {
        var number = nums[i];
        nums.splice(i, 1);
        var re = twoSum(nums, 0 - number);
        if (re.length !== 0) {
            for (var j = 0; j < re.length; j++) {
                var two = re[j];
                two.push(number)
                two.sort(function (a, b) { return a - b; });

                var str = two.join('');
                if (!hash.has(str)) {
                    result.push(two);
                    hash.add(str);
                }
            }
        }

        nums.splice(i, 0, number);
    }

    return result;
};

var twoSum = function(nums, target) {
    var map = new Map(),
        result = [];


    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            result.push([nums[i], map.get(nums[i])]);
        } else {
            var rest = target - nums[i];
            map.set(rest, nums[i]);
        }
    }

    return result;
};

console.log(threeSum([2,-8,8,6,-14,-12,11,-10,13,14,7,3,10,-13,3,-15,7,3,-11,-8,4,5,9,11,7,1,3,13,14,-13,3,-6,-6,-12,-15,-12,-9,3,-15,-11,-6,-1,0,11,2,-12,3,-6,6,0,-6,-12,-10,-12,6,5,-4,-5,-5,-4,-11,13,5,-2,-13,-3,-7,-15,8,-15,12,-13,0,-3,6,9,-8,-6,10,5,9,-11,0,7,-15,-8,-3,-4,-6,7,7,-2,-2,-11,3,0,-6,12,0,-13,4,-3,11,-11,1,2,13,8,4,9,-1,-2,5,14,12,5,13,-6,-13,-8,9,1,5,-8,-2,-6,-1]));