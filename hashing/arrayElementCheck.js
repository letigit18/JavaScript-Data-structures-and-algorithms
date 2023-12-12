//checking a common element in both array which take quadratic time complexity
function elementChecker(array, array2){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array[i] === array2[j]){
                return true
            }
        }
    }
    return false
}
console.log(elementChecker([5,3,4], [2, 8, 5]))
//checking a common element by using hashmap
function hashmapChecker(array, array2){
    const nums = {}
    for(let i = 0; i < array.length; i++){
        nums[array[i]] = true;
    }
    for (let j = 0; j < array2.length; j++){
        if(nums[array2[j]] === true){
            return 'Found'
        }
    }
    return -1;
}
console.log(hashmapChecker([5,3,4], [2, 8, 10]))