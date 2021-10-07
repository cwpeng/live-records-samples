/**
 * @param {string} s
 * @return {boolean}
 */
let isValid=function(s){
  const openToClose={
    "(":")", "[":"]", "{":"}"
  };
  const closeToOpen={
    ")":"(", "]":"[", "}":"{"
  };
  let stack=[];
  for(let i=0;i<s.length;i++){
    const char=s.charAt(i);
    if(openToClose[char]){
      stack.push(char);
    }else{
      const open=stack.pop();
      if(closeToOpen[char]!==open){
        return false;
      }
    }
  }
  return stack.length===0;
};