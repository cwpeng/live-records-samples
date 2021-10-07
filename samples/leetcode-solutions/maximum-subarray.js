/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray=function(nums){
  let maxSum=nums[0];
  let cumulatedSum=nums[0];
  for(let i=1;i<nums.length;i++){
    cumulatedSum+=nums[i];
    if(nums[i]>cumulatedSum){
        cumulatedSum=nums[i];
    }
    if(cumulatedSum>maxSum){
        maxSum=cumulatedSum;
    }
  }
  return maxSum;
};