// this function returns true if the duplicate found else false
function checkDuplicate(arr){
    let s = new Set(arr)
    if(s.size < arr.length){
        return true
    }
    return false;

}
console.log(checkDuplicate([1,3,3,2]))