# https://leetcode.com/problems/single-number

# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    require 'set'
    unique_sum = Set.new(nums).sum
    
    2*unique_sum - nums.sum
end