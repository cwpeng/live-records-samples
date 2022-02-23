/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
*/
let convert=function(s, numRows){
  if(numRows===1){
    return s;
  }
  let result="";
  let gap=numRows+numRows-2;
  for(let row=0;row<numRows;row++){
    for(let i=row;i<s.length;i+=gap){
      // 主幹的字
      result+=s[i];
      // 得到中間的字
      if(row>0 && row<numRows-1){
        let middleIndex=i+gap-2*row;
        if(middleIndex<s.length){
          result+=s[middleIndex];
        }
      }
    }
  }
  return result;
};