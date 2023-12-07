function binarySearch(arr, n){
    let maxlength = arr.length - 1;
    for(let i = 0; i <= maxlength; i++){
        var midindex = Math.floor((maxlength + i)/2)
        if (arr[midindex] == n){
            return 1
        }
        else if(n > arr[midindex]){
            i = midindex;
        }
        else{
            maxlength = midindex
        }
    }
return -1;
}
console.log(binarySearch([1,2,3,4,5,6], 8))