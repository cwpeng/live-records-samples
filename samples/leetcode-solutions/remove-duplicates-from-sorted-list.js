/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates=function(head){
  if(head===null){
    return head;
  }
  let hold=head;
  let current=head;
  while(current.next!==null){
    if(current.val!==current.next.val){
      hold.next=current.next;
      hold=current.next;
    }
    current=current.next;
  }
  hold.next=null;
  return head;
};