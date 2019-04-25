class User
  #dfi + tab
  #command + d
  # TODO :
  #ctrl + shift + arrow keys
  attr_reader :username
  # , :tweets

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self}
    # Tweet.all.collect{ |tweet| tweet.user == self}
  end

  def post_tweet(message)
    # binding.pry
    @tweets << Tweet.new(message, self)
  end

  #Getter
  # def tweets
  #   @tweets
  # end

  my_book.title=("Carrie")
  my_book.title = "Carrie"
  #Setter
  # def tweet=(tweet)
  #   tweet
  # end

  # def username
  #   @username
  # end

end
