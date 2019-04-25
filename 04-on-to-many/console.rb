require_relative 'user.rb'
require_relative 'tweet.rb'
require 'pry'

coffee_dad = User.new("coffee_dad")
# coffee_tweet = Tweet.new("the world is about to end, and who cares", coffee_dad)
coffee_dad.post_tweet("I need more coffee")
binding.pry
0
