class User < ApplicationRecord
  has_secure_password

  validates :username, {presence: true, uniqueness: true}

  # passsword=()
  # password_confirmation=()
end
