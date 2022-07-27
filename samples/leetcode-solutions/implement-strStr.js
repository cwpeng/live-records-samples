/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr=function(haystack, needle){
  if(needle===""){
    return 0;
  }
  let lhp=generateLHP(needle);
  let hIndex=0;
  let nIndex=0;
  while(hIndex<haystack.length){
    if(haystack[hIndex]===needle[nIndex]){
      hIndex++;
      nIndex++;
    }else{
      if(nIndex>0){
        nIndex=lhp[nIndex-1];
      }else{
        hIndex++;
      }
    }
    if(nIndex===needle.length){
      return hIndex-needle.length;
    }
  }
  return -1;
};
let generateLHP=function(needle){
  let lhp=new Array(needle.length);
  lhp[0]=0;
  let prefixLen=0;
  let i=1;
  while(i<needle.length){
    if(needle[prefixLen]===needle[i]){
      prefixLen++;
      lhp[i]=prefixLen;
      i++;
    }else{
      if(prefixLen>0){
        prefixLen=lhp[prefixLen-1];
      }else{
        lhp[i]=0;
        i++;
      }
    }
  }
  return lhp;
};