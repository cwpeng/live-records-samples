/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest=function(nums, target){
  let result=nums[0]+nums[1]+nums[2];
  nums.sort((n1,n2)=>(n1-n2)); // ordered from small to big
  for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i-1]){
      continue;
    }
    let start=i+1;
    let end=nums.length-1;
    while(start<end){
      const sum=nums[i]+nums[start]+nums[end];
      if(Math.abs(sum-target)<Math.abs(result-target)){
        result=sum;
      }
      if(sum>target){
        end--;
      }else if(sum<target){
        start++;
      }else{
        return target;
      }
    }
  }
  return result;
};