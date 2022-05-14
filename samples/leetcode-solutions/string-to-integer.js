/**
 * @param {string} s
 * @return {number}
 */
let myAtoi=function(s){
  // ignore leading whitespaces
  let index=0;
  while(s[index]===" "){
    index++;
  }
  // check if the next character is '-' or '+'
  let sign=1; // default to '+'
  if(s[index]==="+"){
    sign=1;
    index++;
  }else if(s[index]==="-"){
    sign=-1;
    index++;
  }
  // read string of digits into integer
  const digits={};
  for(let i=0;i<10;i++){
    digits[i+""]=i;
  }
  let result=0;
  for(let i=index;i<s.length;i++){
    if(digits[s[i]]!==undefined){ // is digit
      result=result*10+digits[s[i]];
    }else{
      break;
    }
  }
  // clamped to max or min
  result=result*sign;
  if(result<-1*Math.pow(2,31)){
    result=-1*Math.pow(2,31);
  }else if(result>Math.pow(2,31)-1){
    result=Math.pow(2,31)-1;
  }
  return result;
};