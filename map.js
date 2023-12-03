//map() function is used to transform array elements 
const arr  = ["computer science", "Information Systems", "Information Technology"];

arr.map((deps, index)=> {
    console.log(`on index ${index} =`+ deps)
})
//multiply array elements by 10
const numbers = [1, 3, 5, 10];
numbers.map((number, index)=>{
    console.log(number * 10)
})
//using single parameter
numbers.map(number => console.log(number * 10))