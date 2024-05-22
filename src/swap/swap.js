/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  // If the list is empty or x = y, return the list unchanged
  if (!list.head || x === y) {
    return list;
  }

  // Initialize four pointers to find the nodes to swap
  let prevX = null;
  let prevY = null;
  let currX = list.head;
  let currY = list.head;

  // Find x and its previous node
  while (currX && currX !== x) {
    // While currX is not null and currX is not x
    prevX = currX; // Move prevX to currX
    currX = currX.next; // Move currX to the next node
  }

  // Find y and its previous node
  while (currY && currY !== y) {
    // While currY is not null and currY is not y
    prevY = currY; // Move prevY to currY
    currY = currY.next; // Move currY to the next node
  }

  // If x or y is not in the list, return the list unchanged
  if (!currX || !currY) {
    return list;
  }

  // If x is not the head of the list, update the next pointer of the previous node of x
  if (prevX) {
    prevX.next = y;
  } else {
    // If x is the head of the list, update the head of the list
    list.head = y;
  }

  // If y is not the head of the list, update the next pointer of the previous node of y
  if (prevY) {
    prevY.next = x;
  } else {
    // If y is the head of the list, update the head of the list
    list.head = x;
  }

  // Swap next pointers of x and y
  let temp = x.next;
  x.next = y.next;
  y.next = temp;

  // Return the list with the nodes swapped
  return list;
}

module.exports = swap;
