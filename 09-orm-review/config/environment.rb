require "bundler"
Bundler.require

DB = {
  conn: SQLite3::Database.new('database.db')
}

DB[:conn].results_as_hash = true

require_all './model/'
