# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  i = 0
  profit = 0
  while i < prices.length - 1
    buy = find_minimum(prices, i)
    sell = find_maximum(prices, buy) unless buy.nil?

    break if buy.nil? || sell.nil?

    profit += prices[sell] - prices[buy]
    i = sell + 1
  end

  profit
end

def find_minimum(prices, index)
  i = index
  while i < prices.length - 1
    break if prices[i] < prices[i + 1]

    i += 1
  end

  return i unless i == prices.length - 1
  return i if prices[i] <= prices [i - 1] && i == prices.length - 1
end

def find_maximum(prices, index)
  i = index
  while i < prices.length - 1
    break if prices[i] > prices[i + 1]

    i += 1
  end

  return i unless i == prices.length - 1
  return i if prices[i] >= prices [i - 1] && i == prices.length - 1
end

puts max_profit [7,1,5,3,6,4]
# 7

puts max_profit [1,2,3,4,5]
# 4

puts max_profit [7,6,4,3,1]
# 0

puts max_profit [1,2]
# 1

puts max_profit [2,4,1]
# 2

puts max_profit [4,2,5]
# 3

puts max_profit [2,2,5]
# 3

puts max_profit [1,7,4,6]
# 8