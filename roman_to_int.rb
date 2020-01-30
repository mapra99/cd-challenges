# frozen_string_literal: true

# @param {String} s
# @return {Integer}
def roman_to_int(s)
  sum = 0
  i = 0
  while i < s.length
    case s[i]
    when 'I'
      case s[i + 1]
      when 'V'
        sum += 4
        i += 1
      when 'X'
        sum += 9
        i += 1
      else
        sum += 1
      end
    when 'V'
      sum += 5
    when 'X'
      case s[i + 1]
      when 'L'
        sum += 40
        i += 1
      when 'C'
        sum += 90
        i += 1
      else
        sum += 10
      end
    when 'L'
      sum += 50
    when 'C'
      case s[i + 1]
      when 'D'
        sum += 400
        i += 1
      when 'M'
        sum += 900
        i += 1
      else
        sum += 100
      end
    when 'D'
      sum += 500
    when 'M'
      sum += 1000
    end
    i += 1
  end
  sum
end

puts roman_to_int('MLCVIII')