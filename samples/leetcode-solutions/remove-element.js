/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement=function(nums, val){
  let k=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==val){ // keep this
      nums[k]=nums[i];
      k++;
    }
  }
  return k;
};