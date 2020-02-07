# https://leetcode.com/problems/reverse-linked-list

# frozen_string_literal: true

# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  return unless head

  new_list = ListNode.new(head.val)
  new_list.next = nil
  reverse_list_helper(head.next, new_list)
end

def reverse_list_helper(node, new_list)
  if node
    actual_list = ListNode.new(node.val)
    actual_list.next = new_list
    reverse_list_helper(node.next, actual_list)
  else
    new_list
  end
end

input = ListNode.new(1)
input.next = ListNode.new(2)
input.next.next = ListNode.new(3)
input.next.next.next = ListNode.new(4)
input.next.next.next.next = ListNode.new(5)

output = reverse_list(input)
puts output.val
puts output.next.val
puts output.next.next.val
puts output.next.next.next.val
puts output.next.next.next.next.val
