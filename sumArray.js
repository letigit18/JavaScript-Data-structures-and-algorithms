function sumArray(arr, weight){

    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j <arr.length; j++){
            if(arr[i] + arr[j] == weight){
                return [arr[i], arr[j]]
            }
        }
    }
    return -1;

}
console.log(sumArray([1, 2, 3, 4, 5], 10))