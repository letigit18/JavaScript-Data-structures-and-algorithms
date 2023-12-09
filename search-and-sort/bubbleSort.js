function bubbleSor(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}
console.log(bubbleSor([6,4,2,1]))