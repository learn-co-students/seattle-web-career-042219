class Tweet
  attr_accessor :message, :username
  @@all = []

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @@all << self
  end

  def self.all
    sql = "SELECT * FROM tweets"

    results = DB[:conn].execute(sql)

    results.map do |tweet_info|
      #{{message, username}, {message, username}, {}}
      Tweet.new(tweet_info)
    end
    # @@all
  end

  def self.create
    sql = "
      CREATE TABLE IF NOT EXISTS
      tweets(message TEXT, username TEXT);
      "
    DB[:conn].execute(sql)
  end

  def self.save(message, username)
    sql = <<-SQL
      INSERT INTO tweets(message, username) VALUES(?, ?)
    SQL
    DB[:conn].execute(sql,message, username)
  end

end
