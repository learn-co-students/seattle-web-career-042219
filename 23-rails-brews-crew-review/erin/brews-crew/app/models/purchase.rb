class Purchase < ApplicationRecord
  belongs_to :brew
  # validates :size, inclusion: {in: %w(small medium large)}
  validates :size, inclusion: {in: ["small", "medium", "large"]}
  validates :special_instructions, length: {maximum: 140}

  # def blend_name
  #   self.brew.blend_name
  # end
end
