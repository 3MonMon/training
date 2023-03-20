var findMedianSortedArrays = function(nums1, nums2) {
  const getMedian = function (arr) {
      if (arr.length%2 == 1) return arr[(arr.length-1)/2]
      let middle = arr.length/2;
      return (arr[middle] + arr[middle-1])/2;
  }
  
  const rec = function(arr1,arr2) {

      if (!arr1.length) return getMedian(arr2);

      let [med1,med2] = [getMedian(arr1),getMedian(arr2)];

      if (med1 == med2) return med1;

      if (med1 > med2) {
          return rec(arr1.slice(0,Math.ceil(arr1.length/2)),[...arr2,...arr1.slice(Math.ceil(arr1.length))])
      }

      if (med1 < med2) {
          return rec(arr1.slice(Math.ceil(arr1.length/2)),[...arr1.slice(0,Math.ceil(arr1.length/2)),...arr2])
      }

      rec(arr1.slice(1,arr1.length))

  }

  return rec(nums1,nums2)

};

console.log(findMedianSortedArrays([2,3],[1,4,5]));