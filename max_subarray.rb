# https://leetcode.com/problems/maximum-subarray

# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums, stack = [])
  stack << nums.sum

  max_sub_array(nums[0..-2], stack) if nums.length > 1
  max_sub_array(nums[1..-1], stack) if nums.length > 1

  stack.max
end

puts max_sub_array [-2,1,-3,4,-1,2,1,-5,4]
# 6
puts max_sub_array [8,-2,-4,-1,-8,3,8,8,3,4,2,-9,-1,-3,-6,8,-3,9]
# 28 (too slow!)