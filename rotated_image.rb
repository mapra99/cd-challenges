# https://leetcode.com/problems/rotate-image/

# frozen_string_literal: true

# matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
# matrix = [[1,2],[3,4]]
# matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
def rotate(matrix)
  limit = matrix.length / 2
  limit -= 1 if matrix.length.odd?
  m = matrix.length - 1
  (0..limit).each do |i|
    (i..m - 1 - i).each do |j|
      matrix[i][j], matrix[m - j][i], matrix[m - i][m - j], matrix[j][m - i] = matrix[m - j][i], matrix[m - i][m - j], matrix[j][m - i], matrix[i][j]
    end
  end
  nil
end
rotate(matrix)
puts matrix.to_s
