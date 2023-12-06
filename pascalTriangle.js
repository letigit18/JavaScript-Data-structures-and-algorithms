function displayNum(n){
    if (n == 0){
        return 0
    }
    console.log(n)
   return displayNum(n-1)
}
displayNum(10)