let set1 = new Set();
const arr = new Array()

const set3  = new Set([5, 5, 6, 6, 7]);
arr[0] = 5;
arr[1] = 6;

set1.add(5) //add method inserts new value but elements should be unique value
set1.add(2)
set1.add(1)
set1.add(6)
set1.delete(1)
console.log(set1)
console.log(set1.size)
const [first, second] = set1;
console.log(first)
console.log(second) 
console.log(arr)
console.log(set3)