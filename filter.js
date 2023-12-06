//filter() function is used to filter the array elements by setting up the condition but it doesn't change the original array

const numbers = [3, 5, 4, 9];
const newArray = numbers.filter((number)=>{
 return (number > 4);
})
console.log(newArray)