/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
let searchInsert=function(nums, target){
  let startIndex=0;
  let endIndex=nums.length-1;
  let insertIndex=-1;
  while(endIndex>=startIndex){
    let midIndex=Math.floor((startIndex+endIndex)/2);
    if(target>nums[midIndex]){
      startIndex=midIndex+1;
    }else if(target<nums[midIndex]){
      endIndex=midIndex-1;
    }else{
      insertIndex=midIndex;
      break;
    }
  }
  if(insertIndex<0){
    insertIndex=endIndex+1;
  }
  return insertIndex;
};