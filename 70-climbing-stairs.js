/**
 * @param {number} n
 * @return {number}
 */

/**
 * Recursive version
 * Will exceed the time limit.
 */
var climbStairs = function(n) {
	if (n == 1)
		return 1;
	else if (n == 2)
		return 2;

	return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * Dynamic Programming - Memorized Version
 */
 var W = [0, 1, 2];

 var climbStairs = function(n) {
 	if (W[n] === undefined){
		W[n] = climbStairs(n - 2) + climbStairs(n - 1);
	}

	return W[n];
 };
