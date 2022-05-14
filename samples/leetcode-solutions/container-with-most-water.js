/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea=function(height){
  let left=0;
  let right=height.length-1;
  let max=(right-left)*Math.min(height[left], height[right]);
  while(right>left){
    if(height[right]<height[left]){
      right--;
    }else{
      left++;
    }
    let currentMax=(right-left)*Math.min(height[left], height[right]);
    if(currentMax>max){
      max=currentMax;
    }
  }
  return max;
};