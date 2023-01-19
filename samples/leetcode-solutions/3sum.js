/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum=function(nums){
  let results=[];
  nums.sort((n1,n2)=>(n1-n2)); // ordered from small to big
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
      break;
    }
    if(nums[i]===nums[i-1]){
      continue;
    }
    let start=i+1;
    let end=nums.length-1;
    while(start<end){
      const sum=nums[i]+nums[start]+nums[end];
      if(sum>0){
        end--;
      }else if(sum<0){
        start++;
      }else{
        results.push([nums[i], nums[start], nums[end]]);
        while(nums[start]===nums[start+1]){
          start++;
        }
        while(nums[end]===nums[end-1]){
          end--;
        }
        start++;
        end--;
      }
    }
  }
  return results;
};