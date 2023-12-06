//reduce function is used for reducing the array elements into a single value eg. summing the array elements
//reduce(accumulator, elementvalue, index, array)=>{}, initial value for the total
const numbers = [3, 5, 5, 9]
let sum = numbers.reduce((total, number)=>{
    return total + number
}, 0)
console.log(sum)
//reducer used on the array of objects
const item = [
    {name: "orange", price: 32},
    {name: "banana", price: 44},
    {name: "apple", price: 50},
    {name: "Mango", price: 25}
]
const totalPrice = item.reduce((total, item)=>{
    return total + item.price
}, 0)
console.log(`total price of the fruits is = ${totalPrice}`)
