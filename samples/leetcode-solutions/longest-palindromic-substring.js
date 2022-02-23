/**
 * @param {string} s
 * @return {string}
*/
let longestPalindrome=function(s){
  let result="";
  // 以單一字元為中心，往外擴展去找到對稱的子字串
  for(let i=0;i<s.length;i++){
    let leftIndex=i;
    let rightIndex=i;
    while(s[leftIndex]!==undefined && s[rightIndex]!==undefined && s[leftIndex]===s[rightIndex]){
      leftIndex--;
      rightIndex++;
    }
    let solution=s.substring(leftIndex+1, rightIndex);
    if(solution.length>result.length){
      result=solution;
    }
  }
  // 以雙字元為中心，往外擴展去找到對稱的子字串
  for(let i=0;i<s.length-1;i++){
    let leftIndex=i;
    let rightIndex=i+1;
    while(s[leftIndex]!==undefined && s[rightIndex]!==undefined && s[leftIndex]===s[rightIndex]){
      leftIndex--;
      rightIndex++;
    }
    let solution=s.substring(leftIndex+1, rightIndex);
    if(solution.length>result.length){
      result=solution;
    }
  }
  return result;
};