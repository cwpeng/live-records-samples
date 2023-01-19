/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne=function(digits){
  let addition=1;
  for(let i=digits.length-1;i>=0;i--){
    digits[i]+=addition;
    if(digits[i]<10){
      addition=0;
      break;
    }else{
      digits[i]=0;
      addition=1;
    }
  }
  if(addition>0){
    digits.unshift(1);
  }
  return digits;
};