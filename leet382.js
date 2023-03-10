/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
  let count = 1;
  while(head.next) {
      count++;
      head = head.next;
  }
  this.count = count;
};

/**
* @return {number}
*/
Solution.prototype.getRandom = function() {
  let seed = Math.floor(Math.random() * (this.count));
  let result = this.head;
  for (let i = 0; i < seed; i++) {
      result = result.next;
  }
  return result.val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

let three = {val:3,next:null}
let two = {val:2,next:three}
let one = {val:1,next:two}

var obj = new Solution(one)
console.log(obj.getRandom())