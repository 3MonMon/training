/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// time efficient
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i = 0; i<nums.length; i++) {

      if (map.has(nums[i]))  return [map.get(nums[i]),i];

      map.set(target-nums[i],i);
  }
};

//space efficient
var twoSum2 = function(nums, target) {
  let map = new Map()
  for(let i = 0; i<nums.length; i++) {
      for(let j = i + 1; j<nums.length;j++) {
          if (nums[i] + nums[j] == target) return [i,j]; 
      }
  }
};