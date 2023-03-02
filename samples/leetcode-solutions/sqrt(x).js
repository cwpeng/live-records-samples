/**
 * @param {number} x
 * @return {number}
*/
let mySqrt=function(x){
  for(let i=0;i<=x;i++){
    if(i*i===x){
      return i;
    }else if(i*i>x){
      return i-1;
    }
  }
};