function maxArray(arr){
   let max = arr[0];
    for (i = 0; i < arr.length; i++){
       if(arr[i] > max){
        max = arr[i]
       }
    }
    return max;
}
console.log(maxArray([2, 767, 2, 11]))