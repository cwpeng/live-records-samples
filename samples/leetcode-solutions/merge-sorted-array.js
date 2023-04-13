/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge=function(nums1, m, nums2, n){
  let p1=m-1;
  let p2=n-1;
  let changePointer=m+n-1;
  while(p1>-1 && p2>-1){
    if(nums2[p2]>nums1[p1]){
      nums1[changePointer]=nums2[p2];
      p2--;
    }else{
      nums1[changePointer]=nums1[p1];
      p1--;
    }
    changePointer--;
  }
  while(p2>-1){
    nums1[changePointer]=nums2[p2];
    p2--;
    changePointer--;
  }
};