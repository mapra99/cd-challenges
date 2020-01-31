# frozen_string_literal: true

def length_of_longest_substring(s)
  result = ''
  length = 0
  s.each_char do |c|
    result = result[result.index(c) + 1..-1] if result.include?(c)
    result += c
    length = result.length if result.length > length
  end
  length
end

puts length_of_longest_substring('aabaab!bb')
