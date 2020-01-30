# frozen_string_literal: true

# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  return false if x.negative?

  dec_power = biggest_unit(x)
  (1..dec_power / 2).each do |i|
    left_digit = x % (10**i) / 10**(i - 1)
    right_digit = x % 10**(dec_power - i + 1) / 10**(dec_power - i)

    return false if left_digit != right_digit
  end
  true
end

def biggest_unit(x)
  i = 0
  i += 1 until (x / 10**i).zero?
  i
end

puts is_palindrome(158)
puts is_palindrome(151)
puts is_palindrome(1551)
