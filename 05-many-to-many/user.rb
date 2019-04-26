class User
  attr_reader :username, :tweets

  @@all = []

  def initialize(username)
    @username = username
    @@all << self
  end

  def self.all
    @@all
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def like_tweet(tweet)
    Like.new(self, tweet)
  end

  def liked_tweets
    # Select method iterate through and find
    # Tweet.all -> returns everything
    # Like.all -> return all the likes.
    # user that liked the tweets.
    # then we pull out those tweets.
    # binding.pry
    user_likes.map { |like| like.tweet }
  end

  def user_likes
    Like.all.select{ |like| like.user == self}
  end

end
