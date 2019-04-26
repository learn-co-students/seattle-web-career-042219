require_relative './tweet.rb'
require_relative './user.rb'
require_relative './like.rb'
require 'pry'

coffee_dad = User.new("Coffee_dad")
tea_uncle = User.new("Tea_uncle")

coffee_dad.post_tweet("I need coffee")
coffee_dad.post_tweet("coffee")
coffee_dad.post_tweet("more coffee")

tea_uncle.post_tweet("I need tea")
tea_uncle.post_tweet("tea")
tea_uncle.post_tweet("more tea")

# binding.pry
Pry.start

true
