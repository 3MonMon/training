/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricRecursive = function(root) {
  const rec = function(node1,node2) {
      if (node1?.val != node2?.val || node1?.val != node2?.val) return false;

      if (!node1) return true;

      return rec(node1.right,node2.left) && rec(node1.left,node2.right);

  }

  return rec(root.left,root.right);
};