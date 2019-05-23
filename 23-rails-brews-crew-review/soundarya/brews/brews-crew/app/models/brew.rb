class Brew < ApplicationRecord
  has_many :purchases

  validates :blend_name, uniqueness: true
end
