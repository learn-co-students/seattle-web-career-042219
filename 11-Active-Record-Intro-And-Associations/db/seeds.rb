Pokemon.create(name: "Pikachu", variety: "Electric", hp: 200)
Pokemon.create(name: "Magikarp", variety: "water", hp: 100)
Pokemon.create(name: "Charizard", variety: "LIT", hp: 500)
Pokemon.create(name: "JigglyPuff", variety: "Air", hp: 100)

Trainer.create(name: "Soundarya", level: 3, home_city: "Pewter", team: "Blue")
Trainer.create(name: "Greg", level: 10,home_city: "California", team: "Red" )
Trainer.create(name: "Erin", level: 10, home_city: "Michigan", team: "Rocket")
Trainer.create(name: "Rachel", level: 10,home_city: "California", team: "Yellow")

PokemonsTrainers.create(pokemon_id: 1, trainer_id: 3)
PokemonsTrainers.create(pokemon_id: 2, trainer_id: 2)
PokemonsTrainers.create(pokemon_id: 3, trainer_id: 1)
PokemonsTrainers.create(pokemon_id: 1, trainer_id: 2)
