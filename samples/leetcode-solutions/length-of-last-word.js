/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord=function(s){
  // escape spaces in the ends of string
  let endIndex=s.length-1;
  while(s[endIndex]===" "){
      endIndex--;
  }
  // calculate length of last word
  let len=0;
  while(endIndex>=0 && s[endIndex]!==" "){
      len++;
      endIndex--;
  }
  return len;
  /* simple solution
    let words=s.trim().split(" ");
    return words[words.length-1].length;
  */
};