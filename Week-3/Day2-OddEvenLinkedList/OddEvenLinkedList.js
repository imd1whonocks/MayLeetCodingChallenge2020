/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head == null) return null;
    let headOdd = head;
    let headEven = head.next;
    let tailOdd = new ListNode();
    let tailEven = new ListNode();
    let flag = true
    while (head != null) {
        if (flag == true) {
            tailOdd.next = head;
            tailOdd = head
        } else {
            tailEven.next = head;
            tailEven = head;
        }
        flag = !flag;
        head = head.next
    }
    tailOdd.next = headEven; 
    tailEven.next = null;
    head = headOdd;
    return head
};