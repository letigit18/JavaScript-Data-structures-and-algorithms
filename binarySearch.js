const numbers = [1, 2, 3, 4, 5];
let n = 5;
let le = numbers.length - 1;
let b = Math.floor(numbers.length/2)
for (let i = 0; i <= le; i++){
    if(n == numbers[b]){
        return "found"
    }
    else if(n > numbers[b]){
        i = numbers[b]
    }
    else{
        le = numbers[b]
    }
}
return (-1)