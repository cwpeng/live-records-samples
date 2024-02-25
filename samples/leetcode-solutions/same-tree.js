/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
*/
// 迴圈解
let isSameTree=function(p, q){
  let pStack=[];
  let qStack=[];
  while(true){
    while(p!==null && q!==null){
      pStack.push(p);
      qStack.push(q);
      p=p.left;
      q=q.left;
    }
    if(p!==null || q!==null){
      return false;
    }
    if(pStack.length===0 || qStack.length===0){
      break;
    }
    p=pStack.pop();
    q=qStack.pop();
    if(p.val!==q.val){
      return false;
    }
    p=p.right;
    q=q.right;
  }
  return true;
}
/* 遞迴解
let isSameTree=function(p, q){
  if(p===null && q===null){
    return true;
  }
  if(p===null || q===null){
    return false;
  }
  if(p.val!==q.val){
    return false;
  }
  const isLeftSame=isSameTree(p.left, q.left);
  const isRightSame=isSameTree(p.right, q.right);
  return isLeftSame && isRightSame;
};
*/