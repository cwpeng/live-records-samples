/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/
/**
 * @param {TreeNode} root
 * @return {number[]}
*/
// 迴圈解
let inorderTraversal=function(root){
  let result=[];
  let stack=[];
  let node=root;
  while(true){
    // 一直往左走到 null 為止，把中間經過的 Node 放進堆疊中
    while(node!==null){
      stack.push(node);
      node=node.left;
    }
    // 堆疊中沒東西，結束
    if(stack.length===0){
      break;
    }
    // 從堆疊中取出一個節點，放進結果裡
    node=stack.pop();
    result.push(node.val);
    // 往右走一格
    node=node.right;
  }
  return result;
};
/* 遞迴解
let inorderTraversal=function(root){
  if(root===null){
    return [];
  }
  let result=[];
  trace(root, result);
  return result;
};
let trace=function(node, result){
  if(node===null){
    return;
  }
  trace(node.left, result);
  result.push(node.val);
  trace(node.right, result);
}
*/