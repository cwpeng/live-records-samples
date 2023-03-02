/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
*/
let fourSum=function(nums, target){
  nums.sort((n1,n2)=>(n1-n2));
  let results=[];
  for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i-1]){
      continue;
    }
    for(let j=i+1;j<nums.length;j++){
      if(j>i+1 && nums[j]===nums[j-1]){
        continue;
      }
      let startIndex=j+1;
      let endIndex=nums.length-1;
      while(startIndex<endIndex){ // 如果開始的編號和結束的編號交會，結束
        let sum=nums[i]+nums[j]+nums[startIndex]+nums[endIndex];
        if(sum>target){
          endIndex--;
        }else if(sum<target){
          startIndex++;
        }else{
          results.push([nums[i], nums[j], nums[startIndex], nums[endIndex]]);
          while(nums[startIndex]===nums[startIndex+1]){ // 重複會跳過
            startIndex++;
          }
          while(nums[endIndex]===nums[endIndex-1]){ // 重複會跳過
            endIndex--;
          }
          startIndex++;
          endIndex--;
        }
      }
    }
  }
  return results;
};