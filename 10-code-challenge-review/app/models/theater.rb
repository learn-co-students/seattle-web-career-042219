class Theater
  attr_accessor :title
  attr_reader :city

  @@all = []

  def initialize(title, city)
    @title = title
    @city = city

    @@all << self
  end

  def self.all
    @@all
  end

  # note: this was added after the review session ended
  def performances
    Performance.all.select do |performance|
      performance.theater == self
    end
  end

  # note: this was added after the review session ended
  def musicals
    self.performances.map do |performance|
      performance.musical
    end.uniq
  end
end
