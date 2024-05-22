const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
  // If the list is empty or has less than three elements, return null
  if (!list.head || !list.head.next || !list.head.next.next) {
    return null;
  }

  // Initialize two pointers
  let fast = list.head; // This pointer will be three elements ahead of the slow pointer
  let slow = list.head; // This pointer will be the third element from the end of the list

  // Move the fast pointer three elements ahead of the slow pointer
  for (let i = 0; i < 3; i++) {
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end of the list
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

module.exports = thirdFromEnd;
