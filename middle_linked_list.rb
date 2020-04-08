# https://leetcode.com/problems/middle-of-the-linked-list/

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
  slow_pointer = head
  fast_pointer = head

  until fast_pointer&.next.nil?
    slow_pointer = slow_pointer.next
    fast_pointer = fast_pointer.next.next
  end

  slow_pointer
end
