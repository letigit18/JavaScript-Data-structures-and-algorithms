let ar = [1, 3, 20, 30];
ar.push(50) //insert to the last index
console.log(ar)
ar.pop(50) //delete the last element
console.log(ar)
ar.shift(1)//deletes the first element
console.log(ar)
//for in
for (var index in ar){
    console.log(ar[index])
}
//for of 
for (let value of ar){
    console.log(value)
}
//for each 
ar.forEach(value => console.log(`value = ${value}`))
//slicing an array slice(beginning index, ending index)
const a = ar.slice(1,2)
console.log(a[0])
/* Array.from(array variable to be copied because if directily assign the array to another variable 
    the changes made on the elements affects the original array b/c array is reference based
    )

*/
const dep = ["IT", "CS", "IS"]
const dep2 = Array.from(dep)
dep2[0] = "Information Technology"
console.log(dep)
console.log(dep2)
//array splice function is used to manipulate the elements splice(index, how many elements, newvalue to elements)
dep2.splice(0, 1, "Engineering")
console.log(dep2)
//implementing slice function from the scratch
function sliceFunc( bindex, eindex, arr){
    for(let i = 0; i < arr.length; i++){
        const newArray = []
        if (i < eindex){
            newArray.push(arr[i])
        }
    }
}
console.log('sorting array')
let num2 = [3, 2, 28, 1, 5]
console.log(num2.reverse())