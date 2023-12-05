//calculating fibonacci of n numbers time complexity = O(n)
function calcFibonacci(n){
    if(n <= 1){
        return n;
    }
let last = 1;
let lastLast = 0;
let sum;
console.log(lastLast);
console.log(last);
for (i = 3; i<=n; i++){
    sum= last + lastLast;
    console.log(sum)
    lastLast = last;
    last = sum;
    
}

}
console.log(calcFibonacci(10))
//calculating fibonacci with recursive function
function recursiveFib(n){
    let lastlast = 0;
    let last = 1;
    if(n <= 1){
        return 1;
    }
    return (recursiveFib(n-1) + recursiveFib(n-2))
}
console.log(recursiveFib(10))