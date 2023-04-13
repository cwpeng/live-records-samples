/**
 * @param {number} n
 * @return {string[]}
 */
// iterative version
let generateParenthesis=function(n){
  let candidates=[{str:"", left:0, right:0}];
  let results=[];
  while(candidates.length>0){
    let entry=candidates.pop();
    if(entry.left===n && entry.right===n){
      results.push(entry.str);
      continue;
    }
    if(entry.left<n){
      candidates.push({str:entry.str+"(", left:entry.left+1, right:entry.right});
    }
    if(entry.right<entry.left){
      candidates.push({str:entry.str+")", left:entry.left, right:entry.right+1});
    }
  }
  return results;
};
// recursive version
/*
let generateParenthesis=function(n){
  let results=[];
  generate("", 0, 0, n, results);
  return results;
}
let generate=function(str, left, right, n, results){
  if(left===n && right===n){
    results.push(str);
    return;
  }
  if(left<n){
    generate(str+"(", left+1, right, n, results);
  }
  if(right<left){
    generate(str+")", left, right+1, n, results);
  }
}
*/