/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let root = l1;
  let oneup = 0;

  while(l1.next && l2.next) {
      let value = l1.val + l2.val + oneup
      if (value > 9) oneup = 1;
      else oneup = 0;

      l1.val = value % 10;

      [l1,l2] = [l1.next,l2.next];
  } 

  let value = l1.val + l2.val + oneup
  if (value > 9) oneup = 1;
  else oneup = 0;

  l1.val = value % 10;

  if (!l1.next) {
      if (!l2.next) {
          if (oneup) l1.next = new ListNode(1);
          return root;
      }
      l1.next = l2.next;
      
  }

  while(l1.next) {
      l1 = l1.next;
      let value = l1.val + oneup;
      if (value > 9) oneup = 1;
      else oneup = 0;

      l1.val = value % 10;

  }

  if (oneup) l1.next = new ListNode(1);

  return root;
};