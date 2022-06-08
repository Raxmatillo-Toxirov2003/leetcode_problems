/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let j = 0;
    const mas = [];
    for (let i = 0; i < head.length; i++) {
        if (nums[i] == val) {} else {
            mas[j] = nums[i];
            j++;
        }
    }
    return mas;
};