/**
 * Definition for a binary tree node.
 *
 * /


 /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
    if (root === null)
        return root;

    var map = new Map();
    var queue = [];

    var front = root;
    map.set(front, [front]);
    while (front !== null) {
        // traverse child
        if (front.left) {
            var arr = map.get(front).slice();
            arr.push(front.left);
            map.set(front.left, arr);

            queue.push(front.left);
        }

        if (front.right) {
            arr = map.get(front).slice();
            arr.push(front.right);
            map.set(front.right, arr);

            queue.push(front.right);
        }

        // check p, q
        if (map.has(p) && map.has(q)) {
            var pArr = map.get(p),
                qArr = map.get(q);

            for (var i = pArr.length - 1; i >= 0; i--) {
                if (qArr.indexOf(pArr[i]) != -1)
                    return pArr[i];
            }
        }

        front = queue.pop();
    }

    return null;
};

var n1 = new TreeNode(3);
var n2 = new TreeNode(5);
var n3 = new TreeNode(1);
var n4 = new TreeNode(6);
var n5 = new TreeNode(2);
var n6 = new TreeNode(0);
var n7 = new TreeNode(8);
var n8 = new TreeNode(7);
var n9 = new TreeNode(4);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n5.left = n8;
n5.right = n9;


console.log(lowestCommonAncestor(n1, n2, n9));