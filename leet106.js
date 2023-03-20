let inorder = [3,2,1];
let postorder = [3,2,1];


  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
 }
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let rec = function (inorder, postorder) {
      
    if (inorder.length <= 1) return [inorder.length ? new TreeNode(inorder[0]) : null,postorder.slice(0,postorder.length-1)];

    let root = postorder.pop();

    let index = inorder.indexOf(root);

    let left = inorder.slice(0,index);
    let right = inorder.slice(index+1);

    let RightNode,LeftNode;
    [RightNode,postorder]= rec(right,postorder);
    [LeftNode,postorder] = rec(left,postorder);

    return [new TreeNode(root,LeftNode,RightNode),postorder];

  }
  return rec(inorder,postorder)[0];
};
console.log(buildTree(inorder,postorder))