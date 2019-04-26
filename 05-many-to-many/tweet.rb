class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likers
    # Select method iterate through and find
    # Tweet.all -> returns everything
    # Like.all -> return all the likes.
    # user that liked the tweets.
    # then we pull out those tweets.
    # binding.pry
    tweet_likes.map { |like| like.user }
  end

  def tweet_likes
    Like.all.select{ |like| like.tweet == self}
  end
end
