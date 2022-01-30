/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
let mergeTwoLists=function(l1, l2){
  let list=null;
  let currentNode=null;
  while(l1!==null || l2!==null){
    // decide what's next node
    let nextNode;
    if(l1===null){
      nextNode=new ListNode(l2.val, null);
      l2=l2.next;
    }else if(l2===null){
      nextNode=new ListNode(l1.val, null);
      l1=l1.next;
    }else if(l1.val<l2.val){
      nextNode=new ListNode(l1.val, null);
      l1=l1.next;
    }else{
      nextNode=new ListNode(l2.val, null);
      l2=l2.next;
    }
    // add next node to final list
    if(list===null){
      list=nextNode;
      currentNode=list;
    }else{
      currentNode.next=nextNode;
      currentNode=currentNode.next;
    }
  }
  return list;
};