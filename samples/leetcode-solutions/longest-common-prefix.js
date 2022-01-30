/**
 * @param {string[]} strs
 * @return {string}
*/
let longestCommonPrefix=function(strs){
  let result="";
  let checkIndex=0;
  while(true){
    let c=strs[0][checkIndex];
    let ok=true;
    for(let i=0;i<strs.length;i++){
      if(checkIndex>strs[i].length-1 || c!==strs[i][checkIndex]){
        ok=false;
        break;
      }
    }
    if(ok){
      result+=c;
      checkIndex++;
    }else{
      break;
    }
  }
  return result;
};