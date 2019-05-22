class DogPark < ApplicationRecord
  # name must be entered in the text box and must be different from the ones already in the db
  validates :name, presence: true, uniqueness: true
  # square_ft must be entered in the text box and must be an integer > 0
  validates :square_ft, presence: true, numericality: {only_integer: true, greater_than: 0}
  # off_leash must be either true or false (the checkbox input will enforce this, but maybe we don't trust the user not to mess with it)
  validates :off_leash, inclusion: { in: [true, false] }
end
