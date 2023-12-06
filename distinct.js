function uniqueElement(arr1, arr2){
    let s = new Set(arr1.concat(arr2))
    return Array.from(s); //copies the set to make the set act like an array
}
console.log(uniqueElement([1, 2, 3, 4], [1,2,5]))
