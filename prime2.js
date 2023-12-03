function isPrime(n){
    if( n < 2){
        return false;
    }
    for (let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }

    }
    return true;
}
for (let j = 1; j < 100; j++){
    if(isPrime(j)){
        console.log(j)
    }
}
