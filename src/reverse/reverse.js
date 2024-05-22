const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
  let reversedList = new LinkedList();
  let node = list.head;

  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
  // Define a recursive function to reverse the list
  function reverse(node, prev) {
    // Base case: if the node is null, return the previous node
    if (!node) {
      return prev;
    }

    // Recursively reverse the list
    let next = node.next;
    node.next = prev;
    return reverse(next, node);
  }
  // Start the recursion with the head of the list and a null previous node
  list.head = reverse(list.head, null);
  return list;
}

module.exports = { reverseIterative, reverseRecursive };
