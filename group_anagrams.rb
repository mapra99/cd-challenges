# https://leetcode.com/problems/group-anagrams/

# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
  hash = {}
  strs.each do |s|
    hash[s.chars.sort].nil? ? hash[s.chars.sort] = [s] : hash[s.chars.sort] << s 
  end

  hash.values
end

puts "#{group_anagrams ["eat", "tea", "tan", "ate", "nat", "bat"]}"