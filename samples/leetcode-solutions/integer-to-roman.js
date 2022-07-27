/**
 * @param {number} num
 * @return {string}
 */
let intToRoman=function(num){
  const maps={
    1000:{
      1:"M"
    },
    100:{
      1:"C", 4:"CD", 5:"D", 9:"CM"
    },
    10:{
      1:"X", 4:"XL", 5:"L", 9:"XC"
    },
    1:{
      1:"I", 4:"IV", 5:"V", 9:"IX"
    }
  };
  let result="";
  let power=1000;
  while(power>0.5){
    let lead=Math.floor(num/power)%10;
    if(lead>0){
      let c=maps[power][lead];
      if(c===undefined){
        if(lead<4){
          c=maps[power][1].repeat(lead);
        }else if(lead>5){
          c=maps[power][5]+maps[power][1].repeat(lead-5);
        }
      }
      result=result+c;
    }
    power=power/10;
  }
  return result;
};