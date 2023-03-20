/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let previous = true;
  let count = 1 - flowerbed[0];
  for (let i = 1; i < flowerbed.length; i++) {
      if (!previous && !flowerbed[i]) {
          count++;
      }
      if (previous && flowerbed[i]) {
          count--;
          continue;
      }
      previous = !previous;
  }
  return count >= n
};