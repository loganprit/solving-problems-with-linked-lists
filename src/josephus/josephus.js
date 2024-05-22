function josephus(list, m) {
  // If the list is empty, return null
  if (!list.head) {
    return null;
  }

  // If the list only contains one node, return the node
  if (!list.head.next) {
    return list.head.value;
  }

  // Initialize a pointer to traverse the list
  let current = list.head;

  // While the list contains more than one node
  while (list.head.next) {
    // Move m-1 steps
    for (let i = 1; i < m; i++) {
      current = current.next || list.head;
    }

    // Remove the node
    list.remove(current.value);

    // Move to the next node
    current = current.next;
  }
  // Return the last node
  return list.head.value;
}

module.exports = josephus;
