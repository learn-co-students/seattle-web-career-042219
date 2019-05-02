class Gym

  attr_accessor :name, :location
  attr_reader :id

  @@all = []

  def initialize(name, location, id=nil)
    @id = id
    @name = name
    @location = location
    @@all << self
  end

  #would access these instance
  def self.instance_all
    @@all
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS gyms(id INTEGER PRIMARY KEY, name TEXT, location TEXT);
    SQL
    DB[:conn].execute(sql)
  end

  #READ
  def self.all
    sql = <<-SQL
      SELECT * FROM gyms;
    SQL
    DB[:conn].execute(sql)
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM memberships WHERE id = ?;
    SQL
    DB[:conn].execute(sql,id)
  end

  #can be reference with new/save/create
  def update (id,column, new_value )
    sql = <<-SQL
      UPDATE gyms SET ? = ? WHERE id = ?
    SQL
    DB[:conn].execute(sql, column, new_value, id)
  end

  #Delete specific rows from out DB
  #DROP a DB
  def delete (id)
    sql = <<-SQL
      DELETE FROM gyms WHERE id = ?
    SQL
    DB[:conn].execute(sql,id)
  end

  def drop
    sql = <<-SQL
      DROP TABLE gyms
    SQL
    DB[:conn].execute(sql)
  end

end
