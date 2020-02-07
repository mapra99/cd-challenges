# https://leetcode.com/problems/add-two-numbers/

# frozen_string_literal: true

# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

def add_two_numbers(l1, l2)
  result = ListNode.new(nil)
  current = result

  remainder = 0
  while l1 || l2
    sum = remainder
    sum += l1.val if l1
    sum += l2.val if l2

    current.val = sum % 10

    remainder = sum / 10

    l1 = l1.next if l1
    l2 = l2.next if l2

    current.next = ListNode.new(nil) if l1 || l2 || !remainder.zero?
    current = current.next
  end
  current.val = remainder unless remainder.zero?

  result
end
