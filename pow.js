function pow (b, exp){
let res = 1;
for (let i = 1; i <=exp; i++){
    res = res * b;
}
return res;
}
console.log(pow(2, 5))
