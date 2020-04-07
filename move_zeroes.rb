# https://leetcode.com/problems/move-zeroes/

# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  i = 0
  (0...nums.length).each do |j|
    if nums[j] != 0
      nums[i], nums[j] = nums[j], nums[i]
      i += 1
    end
  end

  nums
end

puts "#{move_zeroes [1,0,1]}"
# [1,1,0]

puts "#{move_zeroes [0,1,0,3,12]}"
# [1,3,13,0,0]

puts "#{move_zeroes [2,1,1,3,12]}"
# [2,1,1,3,12]

puts "#{move_zeroes [0,1,1,3,12]}"
# [1,1,3,12,0]

puts "#{move_zeroes [0,1,0,0,0]}"
# [1,0,0,0,0]