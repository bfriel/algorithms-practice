# Given a singly linked list return the kth to the last node
def kth_to_the_last(k, head)
  current = head
  pos_end = head

  (k - 1).times do
    pos_end = pos_end.next
  end

  until pos_end.next == nil
    pos_end = pos_end.next
    current = current.next
  end

  current
end
