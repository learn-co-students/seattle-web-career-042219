class Performance
  attr_accessor :date, :musical, :theater

  @@all = []

  def initialize(date, musical, theater)
    @date = date
    @musical = musical
    @theater = theater

    @@all << self
  end

  def self.all
    @@all
  end

  def hometown_setting?
    @musical.setting_city == @theater.city
  end
end
