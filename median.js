let numbers = [2, 3, 5, 7, 10, 12, 14]
function calculateMedian(arr){
    if (arr.length/ 2 == 0)
    {
        return (arr[(arr.length/2)] + arr[(arr.length/2 - 1)]) / 2;
    }
    return arr[Math.floor(arr.length/2)]
}
console.log(calculateMedian(numbers))