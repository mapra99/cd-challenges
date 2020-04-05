# https://leetcode.com/problems/happy-number

# @param {Integer} n
# @return {Boolean}
def is_happy(n, stack=[n])
  new_n = n.digits.map do |x|
    x**2
  end.sum

  return true if new_n == 1
  return false if stack.include? new_n

  stack << new_n
  is_happy(new_n, stack)
end

puts is_happy(19)
# true

puts is_happy(6)
# false