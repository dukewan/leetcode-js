/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var length = nums.length;

    if (length === 0) {
        return 0;
    }

    if (length == 1) {
        return nums[0];
    }

    if (length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    var opt1 = [],
    opt2 = [];

    // 1 to n-1
    opt1[0] = nums[0];
    opt1[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i <= length - 2; i++) {
        opt1[i] = Math.max(nums[i] + opt1[i - 2], opt1[i - 1]);
    }

    // 2 to n
    opt2[1] = nums[1];
    opt2[2] = Math.max(nums[1], nums[2]);
    for (var j = 3; j <= length - 1; j++) {
        opt2[j] = Math.max(nums[j] + opt2[j - 2], opt2[j - 1]);
    }

    return Math.max(opt1[length - 2], opt2[length - 1]);
};
