/**
 * @param {number} n
 * @return {number}
*/
let climbStairs=function(n){
  if(n===1){
    return 1;
  }else if(n===2){
    return 2;
  }
  let nMinus2=1;
  let nMinus1=2;
  let step=3;
  while(step<=n){
    let result=nMinus2+nMinus1;
    nMinus2=nMinus1;
    nMinus1=result;
    step++;
  }
  return nMinus1;
};