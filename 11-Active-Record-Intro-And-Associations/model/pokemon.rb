class Pokemon < ActiveRecord::Base
  has_and_belongs_to_many :trainers
  # belongs_to :trainer
  # has_many :trainers
  # has_many :trainers, through: :pokemon_trainers
end
