# frozen_string_literal: true

def search(nums, target)
  return -1 if nums.empty?
  return nums[0] == target ? 0 : -1 if nums.one?

  pivot_index = find_pivot(nums)

  # nums1 = nums[0..pivot_index]
  # result = binary_search(nums1, target)

  # if result == -1
    nums2 = nums[(pivot_index + 1)..-1]
    result = binary_search(nums2, target)
    result +=  pivot_index + 1 if result != -1
  # end

  result
end

def find_pivot(nums)
  pivot_index = 0
  (0...nums.length - 1).each do |i|
    if nums[i] > nums[i + 1]
      pivot_index = i
      break
    end
  end

  pivot_index
end

def binary_search(arr, target, range = (0...arr.length))
  arr_segment = arr[range]
  pivot = arr_segment.length / 2 + range.first
  puts "#{pivot} | #{arr_segment}"
  if arr_segment.one? && target != arr[pivot]
    -1
  elsif arr_segment.one? && target == arr[pivot]
    pivot
  elsif target < arr[pivot]
    binary_search(arr, target, (0...pivot))
  elsif target > arr[pivot]
    binary_search(arr, target, (pivot + 1..-1))
  end
end

puts search([1, 3, 5], 5)
# puts find_pivot([1,3,5])
