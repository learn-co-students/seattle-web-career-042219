let aa = [1, 2, 3, 4, 5]
let bb = [...aa] // deep copy
let cc = aa      // shallow copy is still aa

cc[0] = 99

console.log(aa)
console.log(bb)
console.log(cc)

> let name = 'Steve'
undefined
> let city = 'Seattle'
undefined
> let oo = {name: name, city: city}
undefined
> let o2 = {name, city}
undefined
> o2
{ name: 'Steve', city: 'Seattle' }
> oo = {drink: 'coffee', price: 999}
{ drink: 'coffee', price: 999 }
> let {price} = oo
undefined
> price
999
> oo
{ drink: 'coffee', price: 999 }
> 
