class Tweet
  attr_accessor :message
  attr_reader :user

  @@all = []
  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
    # @@all = []
  end

  def self.all
    @@all
  end

  def username
    #<TweetUser tweet [] , username :"" >
    self.user.username
  end
end
