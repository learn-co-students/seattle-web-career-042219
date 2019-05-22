# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DogPark.destroy_all

DogPark.create(name: "Bark Park", square_ft: 2, off_leash: true)
DogPark.create(name: "Denny Park", square_ft: 400, off_leash: false)
