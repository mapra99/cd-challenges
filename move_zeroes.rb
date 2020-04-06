# https://leetcode.com/problems/move-zeroes/

# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums, start = 0)
  return nums if start >= nums.length

  zero_index = start
  zero_index += 1 until nums[zero_index] == 0 || nums[zero_index].nil?

  return nums if nums[zero_index].nil?

  number_index = zero_index
  number_index += 1 until nums[number_index] != 0 || nums[number_index].nil?

  return nums if nums[number_index].nil?

  nums[zero_index] = nums[number_index]
  nums[number_index] = 0
  move_zeroes(nums, zero_index + 1)
end

puts move_zeroes [0,1,0,3,12]