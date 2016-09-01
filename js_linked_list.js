// Given a singly linked list return the kth to the last node
function kthToTheLast(k, head) {
  let current = head;
  let posEnd = head;

  for (let i = 0; i < k - 1; i ++) {
    posEnd =  posEnd.next();
  }

  while (posEnd.next()) {
    posEnd = posEnd.next();
    current = current.next();
  }

  return current;
}
