/**
 * @param {string} digits
 * @return {string[]}
*/
let letterCombinations=function(digits){
  let charsMap={
    "2":["a", "b", "c"],
    "3":["d", "e", "f"],
    "4":["g", "h", "i"],
    "5":["j", "k", "l"],
    "6":["m", "n", "o"],
    "7":["p", "q", "r", "s"],
    "8":["t", "u", "v"],
    "9":["w", "x", "y", "z"]
  };
  let results=[];
  for(let i=0;i<digits.length;i++){
    let chars=charsMap[digits[i]];
    if(results.length===0){
      results=results.concat(chars);
    }else{
      let temp=[];
      for(let j=0;j<results.length;j++){
        for(let k=0;k<chars.length;k++){
          temp.push(results[j]+chars[k]);
        }
      }
      results=temp;
    }
  }
  return results;
};