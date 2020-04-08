# @param {Integer[]} arr
# @return {Integer}
def count_elements(arr)
  require 'set'
  unique = Set.new(arr)
  arr.count do |x|
    unique.include? x + 1
  end
end

puts count_elements [1,2,3]
# 2

puts count_elements [1,1,3,3,5,5,7,7]
# 0

puts count_elements [1,3,2,3,5,0]
# 3

puts count_elements [1,1,2,2]
# 2