# frozen_string_literal: true

require 'faker'

10.times do
  Brew.create(
    blend_name: Faker::Coffee.blend_name,
    origin: Faker::Coffee.origin,
    notes: Faker::Coffee.notes,
    strength: rand(1..5),
    price: rand(5..10)
  )
end

10.times do
  Purchase.create(
    customer: Faker::Coffee.blend_name
  )
end
