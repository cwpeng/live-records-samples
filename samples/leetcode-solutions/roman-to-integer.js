/**
 * @param {string} s
 * @return {number}
 */
let romanToInt=function(s){
  const romanMap={
    I:1, V:5, X:10, L:50, C:100, D:500, M:1000,
    IV:4, IX:9, XL:40, XC:90, CD:400, CM:900
  };
  let result=0;
  for(let i=0;i<s.length;i++){
    const twoChars=s.substring(i, i+2);
    if(romanMap[twoChars]){
        result+=romanMap[twoChars];
        i++;
    }else{
        result+=romanMap[s.charAt(i)];
    }
  }
  return result;
};