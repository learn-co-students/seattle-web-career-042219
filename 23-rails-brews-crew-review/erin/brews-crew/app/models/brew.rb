class Brew < ApplicationRecord
  has_many :purchases
  validates :blend_name, uniqueness: true

  def self.strongest
    max_strength = self.maximum(:strength)
    self.where(strength: max_strength)
  end

  def customer_names
    # self.purchases.map { |p| p.customer_name }.uniq
    self.purchases.pluck(:customer_name).uniq
  end
end
